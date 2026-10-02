const app = dv.app;
const context = dv.current();
const origin = context.file.path;
const projectStatuses = ["Active", "Waiting", "Completed", "Cancelled"];
const definitions = {
  meeting: ["Meeting", "Meetings", "Meeting", false],
  project: ["Project", "Projects", "Project", true],
  note: ["Note", "Notes", "Note", false],
  kb: ["KB Article", "KB", "KB Entry", false],
  application: ["KB Application", "KB", "KB Application", true]
};
function appendSection(text, heading, entry) {
  const marker = "## " + heading;
  const lines = text.split("\n");
  const start = lines.findIndex(line => line.trim() === marker);
  if (start < 0) return text.trimEnd() + "\n\n" + marker + "\n\n" + entry + "\n";
  let end = start + 1;
  while (end < lines.length && !/^#{1,2} /.test(lines[end])) end++;
  return lines.slice(0, end).join("\n").trimEnd() + "\n\n" + entry + "\n\n" + lines.slice(end).join("\n");
}
function promptEntry(kind, folder, folderMode) {
  return new Promise(resolve => {
    const dialog = document.createElement("dialog");
    dialog.style.cssText = "background:var(--background-primary);color:var(--text-normal);border:1px solid var(--background-modifier-border);border-radius:12px;padding:24px;width:480px;max-width:90vw;";
    const form = document.createElement("form");
    const title = document.createElement("h3");
    title.textContent = "New " + kind;
    form.appendChild(title);
    const values = { name: "", project: "", application: "", date: dv.luxon.DateTime.local().toFormat("yyyy-MM-dd"), storeInApplication: false };
    const row = (caption, control) => {
      const label = document.createElement("label");
      label.style.cssText = "display:block;margin:16px 0;";
      const text = document.createElement("div");
      text.textContent = caption;
      text.style.marginBottom = "6px";
      control.style.width = "100%";
      label.append(text, control);
      form.appendChild(label);
    };
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.required = true;
    row(kind === "KB Application" ? "Application name" : kind + " name", nameInput);
    const picker = (key, type, root, caption) => {
      const select = document.createElement("select");
      const add = (value, text) => {
        const option = document.createElement("option");
        option.value = value; option.textContent = text; select.appendChild(option);
      };
      add("", "None — optional");
      for (const page of dv.pages('"' + root + '"').where(page => page.type === type).sort(page => page.file.name, "asc")) {
        add(page.file.path, page.file.name + " — " + page.file.folder);
      }
      select.addEventListener("change", () => values[key] = select.value);
      row(caption, select);
    };
    if (kind !== "Project") picker("project", "project", "Projects", "Related project");
    if (kind !== "KB Application") picker("application", "application", "KB", "Related application");
    let meetingDate;
    if (kind === "Meeting") {
      meetingDate = document.createElement("input"); meetingDate.type = "date";
      meetingDate.value = values.date; meetingDate.required = true;
      row("Meeting date", meetingDate);
    }
    if (kind === "KB Article") {
      const store = document.createElement("input"); store.type = "checkbox";
      store.addEventListener("change", () => values.storeInApplication = store.checked);
      row("Store in selected application's folder (optional)", store);
    }
    const error = document.createElement("p");
    error.setAttribute("role", "alert");
    form.appendChild(error);
    const create = document.createElement("button");
    create.type = "submit"; create.textContent = "Create"; create.className = "mod-cta";
    const cancel = document.createElement("button");
    cancel.type = "button"; cancel.textContent = "Cancel"; cancel.style.marginLeft = "8px";
    cancel.addEventListener("click", () => dialog.close());
    form.append(create, cancel);
    let result = null;
    form.addEventListener("submit", event => {
      event.preventDefault();
      values.name = nameInput.value.trim();
      if (!values.name || /[<>:"/\\|?*\[\]#^\x00-\x1f]/.test(values.name) || /[. ]$/.test(values.name) || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(values.name)) {
        error.textContent = "Enter a valid name without special filename characters."; return;
      }
      if (folderMode && app.vault.getAbstractFileByPath(folder + "/" + values.name)) {
        error.textContent = "That folder already exists. Choose another name."; return;
      }
      if (meetingDate) {
        values.date = meetingDate.value;
        if (!dv.luxon.DateTime.fromISO(values.date).isValid) { error.textContent = "Choose a valid meeting date."; return; }
      }
      if (values.storeInApplication && !values.application) { error.textContent = "Select an application to store the article in its folder."; return; }
      result = values; dialog.close();
    });
    dialog.addEventListener("close", () => { dialog.remove(); resolve(result); }, { once: true });
    dialog.appendChild(form);
    document.body.appendChild(dialog);
    dialog.showModal();
    nameInput.focus();
  });
}

async function createEntry(key) {
  const [kind, defaultFolder, template, folderMode] = definitions[key];
  let folder = defaultFolder;
  const source = app.vault.getAbstractFileByPath("Templates/" + template + ".md");
  if (!source || source.extension !== "md") throw new Error("Missing template: Templates/" + template + ".md");
  const values = await promptEntry(kind, folder, folderMode);
  if (!values) return;
  if (key === "kb" && values.storeInApplication) {
    const applicationFile = app.vault.getAbstractFileByPath(values.application);
    if (!applicationFile || applicationFile.extension !== "md") throw new Error("Selected application no longer exists.");
    folder = applicationFile.parent.path;
  }
  const now = dv.luxon.DateTime.local();
  let content = await app.vault.read(source);
  const token = value => "{" + "{" + value + "}" + "}";
  content = content.split(token("date:YYYY-MM-DD")).join(values.date).split(token("title")).join(values.name);
  const link = path => "[[" + path.replace(/\.md$/, "") + "]]";
  const properties = {};
  if (values.project) properties.projects = [link(values.project)];
  if (values.application) properties.applications = [link(values.application)];
  // If only a project is selected, inherit its application links.
  if (key !== "application" && !values.application && values.project) {
    const project = dv.page(values.project);
    properties.applications = Array.from(project?.applications || []).filter(item => item?.path).map(item => link(item.path));
  }
  content = content.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (_, body) => {
    for (const [name, links] of Object.entries(properties)) {
      const row = name + ": " + JSON.stringify(links);
      const pattern = new RegExp("^" + name + ":.*$", "m");
      body = pattern.test(body) ? body.replace(pattern, row) : body + "\n" + row;
    }
    return "---\n" + body + "\n---";
  });
  if (!app.vault.getAbstractFileByPath(folder)) await app.vault.createFolder(folder);
  let destination, createdFolder = null;
  if (folderMode) {
    const nested = folder + "/" + values.name;
    createdFolder = await app.vault.createFolder(nested);
    destination = nested + "/" + values.name + ".md";
  } else {
    const base = values.date + " - " + values.name;
    destination = folder + "/" + base + ".md";
    let counter = 2;
    while (app.vault.getAbstractFileByPath(destination)) destination = folder + "/" + base + " (" + counter++ + ").md";
  }
  let file;
  try { file = await app.vault.create(destination, content); }
  catch (error) {
    if (createdFolder && createdFolder.children.length === 0) {
      try { await app.vault.delete(createdFolder); } catch (_) { /* Leave folder if cleanup fails. */ }
    }
    throw new Error("Could not create entry: " + error.message);
  }
  if (context.type === "daily") {
    const reference = "- " + now.toFormat("HH:mm") + " · " + kind + ": " + app.fileManager.generateMarkdownLink(file, origin);
    const saveReference = async () => {
      const daily = app.vault.getAbstractFileByPath(origin);
      if (!daily) throw new Error("Original daily note not found.");
      await app.vault.process(daily, text => text.includes(reference) ? text : appendSection(text, "Created Today", reference));
    };
    try { await saveReference(); }
    catch (error) {
      dv.paragraph("Created " + destination + ", but the daily reference failed: " + error.message);
      const repair = dv.el("button", "Repair daily reference");
      repair.addEventListener("click", async () => {
        repair.disabled = true;
        try { await saveReference(); repair.textContent = "Reference saved"; }
        catch (problem) { dv.paragraph(problem.message); repair.disabled = false; }
      });
    }
  }
  await app.workspace.getLeaf(false).openFile(file);
}
async function addTodo() {
  const daily = app.vault.getAbstractFileByPath(origin);
  if (!daily) throw new Error("Daily note not found.");
  const task = "- [ ] Task description\n  - **TicketNumber:**\n  - **Product:**\n  - **User:**\n  - **Note:**";
  await app.vault.process(daily, text => appendSection(text, "New ToDos", task));
}
for (const key of input?.actions || []) {
  const button = dv.el("button", key === "todo" ? "Create New ToDo" : "New " + definitions[key][0]);
  button.style.marginRight = "8px";
  button.style.marginBottom = "8px";
  button.addEventListener("click", async () => {
    button.disabled = true;
    try { await (key === "todo" ? addTodo() : createEntry(key)); }
    catch (error) { dv.paragraph(error.message); }
    finally { button.disabled = false; }
  });
}

if (input?.statusControl && context.type === "project") {
  const select = dv.el("select", "");
  for (const status of projectStatuses) {
    const option = document.createElement("option"); option.value = status; option.textContent = status; select.appendChild(option);
  }
  const current = projectStatuses.find(value => value.toLowerCase() === String(context.status || "Active").toLowerCase());
  select.value = current || "Active";
  select.addEventListener("change", async () => {
    const file = app.vault.getAbstractFileByPath(origin);
    try { await app.fileManager.processFrontMatter(file, properties => properties.status = select.value); }
    catch (error) { dv.paragraph("Could not save status: " + error.message); }
  });
}
