# Setup — Configure Obsidian for OpsDesk

[[ReadMe|Home]]

## 1. Open the complete vault

Install Obsidian desktop, choose Open folder as vault, and select the folder containing Daily Notes, KB, Meetings, Notes, Projects, System, Templates, and Vault Guide. Choose any convenient location for your extracted OpsDesk folder, for example `%USERPROFILE%\Documents\OpsDesk`. Paste this path into the Windows File Explorer address bar to resolve it to your own user folder; `%USERPROFILE%` means your Windows user profile.

Keep the folder names and template filenames unchanged. Include System/Scripts/VaultEntryButtons.js: dashboards and daily notes load their buttons from this file. A folder containing only these guides is not the complete workflow.

## 2. Enable the core features

Under Settings → Core plugins, enable Daily notes, Templates, and Bases. Command palette, File explorer, and Properties view are useful for everyday navigation/editing. Bases is required for the editable dashboard tables; Workspaces is not required.

Under Settings → Daily notes:

| Setting | Value |
| --- | --- |
| Date format | YYYY-MM-DD |
| New file location | Daily Notes |
| Template file location | Templates/Daily Note.md |

Under Settings → Templates, set Template folder location to Templates. Keep the template's custom date placeholders; the other core date/time defaults do not control filenames created by the shared buttons.

## 3. Install Dataview

Open Settings → Community plugins. Turn on community plugins if Restricted mode is enabled. Browse for Dataview by Michael Brenan, install it, and enable it.

Dataview is the only community plugin required. Tasks, QuickAdd, Buttons, Templater, and rollover plugins are not needed for this setup.

Under Settings → Dataview, configure:

| Setting | Value / purpose |
| --- | --- |
| Enable JavaScript queries | On — required for buttons and document lists |
| Automatic view refreshing | On — refresh dashboards after changes |
| Enable inline queries | On to match the current vault; not required by the supplied query blocks |
| Enable inline JavaScript queries | Optional; the supplied buttons use block queries, not inline JavaScript |
| Task completion tracking | On to match current behavior; adds a completion date when checking through Dataview |
| Completion field | completion |
| Completion date format | yyyy-MM-dd |
| Recursive subtask completion | On in the current vault; checking a parent task may also complete child tasks |

Setting labels may vary slightly by Dataview version. The inspected refresh interval is 2500 ms. Empty-result warnings are enabled; an empty dashboard is normal before entries exist.

## 4. Configure startup, files, links, and attachments

Under Settings → Files and links:

Match these settings:

| Setting | Value | What it does |
| --- | --- | --- |
| Default file to open | Daily note | Opens the daily note when Obsidian starts |
| Always focus new tabs | On | Switches immediately to links opened in a new tab |
| Default location for new notes | Vault folder | Places ordinary manually created notes at the vault root; workflow buttons still use their designated folders |
| Default location for new attachments | In subfolder under current folder | Stores new attachments relative to the note you are editing |
| Subfolder name | Attachments | Creates an Attachments folder when needed |
| New link format | Shortest path when possible | Uses the shortest path that identifies the linked note |
| Automatically update internal links | On | Updates references when notes are renamed |
| Use `[[Wikilinks]]` | On | Generates Obsidian-style note links and image embeds |

This stores pasted/dragged attachments beside the current note's folder: Daily Notes/Attachments, Meetings/Attachments, or inside an individual project/application folder. Obsidian creates the subfolder when needed. Existing files are not relocated by changing the setting; move them using Obsidian and check their links.

Use Properties in document: Visible under Settings → Editor so relationships are easy to edit. Set applications, projects, and kb_articles to List where present; date to Date; type and project status to Text. Vendor and SME currently remain body fields.

## 5. Check the workflow

1. Run Daily notes: Open today's daily note. Confirm the heading/date, navigation, and creation buttons.
2. Create a test KB Application, then a test Project linked to it.
3. Create a test Meeting selecting only that project. Confirm its application links were inherited and daily references were recorded.
4. Add a meeting action and verify it appears in the daily open-action section.
5. Add a daily ToDo; verify another day's note displays it as unfinished. Check it and verify the original updates.
6. Paste a test screenshot and confirm the folder-relative Attachments location.
7. Check the dashboards and related-entry lists. Delete only the test entries you created when finished.

Use Reading view or Live Preview for rendered views. Source mode is useful for editing queries and templates.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| JavaScript queries disabled | Enable JavaScript queries in Dataview, then reopen the note |
| Buttons missing / custom view not found | Confirm System/Scripts/VaultEntryButtons.js exists under System/Scripts and the note calls System/Scripts/VaultEntryButtons |
| Cannot find module obsidian | The script is outdated; replace it with the current self-contained dialog version |
| Unrecognized function trim | An older daily note has the old query; copy the current query section from Daily Note.md while preserving content |
| Empty relationship selector | Create an application/project first; verify type is application/project and the note is in KB/Projects |
| Related entries missing | Use actual linked notes in the list properties; verify type, paths, and links |
| Images still at vault root | Recheck attachment setting; it applies to new attachments only |
| New template features missing in old notes | Template updates do not rewrite existing entries |

## Preserve your work

Back up the complete vault, including .obsidian, System, notes, and attachments. A template/package restore point is not a backup of work entered into the vault. Copy files carefully and avoid overwriting filled-in notes during updates.

Documentation is based on the current vault files/settings reviewed on October 1, 2026. Reading configurations confirms setup values, not a live end-to-end UI test.


## Check the consistency update

Confirm meeting creation uses the chosen date in both filename and Properties. Test optional application-folder KB filing. On a new project, change the Project Status dropdown and confirm dashboard placement. Check Related Notes on projects/applications. If a daily-reference save fails, use Repair daily reference in the originating note; the created entry is retained. No additional plugin is required. Existing content notes may require copying new relationship/status sections from their templates.


## Bases dashboard tables

Keep the System/Bases folder with Projects.base, Meetings.base, Notes.base, and KB.base. These files are embedded in their corresponding dashboards. Dataview remains required for creation buttons, task views, and related-entry lists. Enable Bases under Core plugins if an embed is not rendered. See [[Vault Guide/Section Guides/Bases Guide|Bases Guide]] for use.

