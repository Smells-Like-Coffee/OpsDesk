---
type: project
status: Active
applications: []
kb_articles: []
date: {{date:YYYY-MM-DD}}
---

# {{title}}

[[Projects/Projects Dashboard|← Projects Dashboard]]

## Objective


## Project Status

```dataviewjs
await dv.view("System/Scripts/VaultEntryButtons", { statusControl: true });
```

## Current Status


## Next Actions

- [ ] 

## Progress / Notes


## Related Links

## Related Meetings

```dataview
LIST
FROM "Meetings"
WHERE contains(projects, this.file.link)
SORT date DESC
```

## Directly Related KB Articles

```dataview
LIST
FROM "KB"
WHERE type = "kb" AND (contains(projects, this.file.link) OR contains(this.kb_articles, file.link))
SORT file.name ASC
```

## Project Documents

```dataviewjs
const prefix = dv.current().file.folder + "/";
const files = app.vault.getFiles().filter(file => file.path.startsWith(prefix) && file.path !== dv.current().file.path);
dv.list(files.map(file => dv.fileLink(file.path)));
```



## KB Articles for the Same Application

```dataview
LIST
FROM "KB"
WHERE type = "kb" AND any(map(applications, (a) => contains(this.applications, a))) AND !contains(projects, this.file.link) AND !contains(this.kb_articles, file.link)
SORT file.name ASC
```

## Related Notes

```dataview
LIST
FROM "Notes"
WHERE type = "note" AND contains(projects, this.file.link)
SORT file.mtime DESC
```


