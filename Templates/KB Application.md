---
type: application
date: {{date:YYYY-MM-DD}}
projects: []
---

# {{title}}

[[KB/KB Dashboard|← KB Dashboard]]

## Overview


## Servers / Environment


## Support Details

- **Vendor:**
- **SME:**

## Notes / Known Issues


## Procedures / References


## Related KB Articles

```dataview
LIST
FROM "KB"
WHERE type = "kb" AND contains(applications, this.file.link)
SORT file.name ASC
```

## Related Projects and Meetings

```dataview
TABLE WITHOUT ID file.link AS "Entry", type AS "Type"
FROM "Projects" OR "Meetings"
WHERE (type = "project" OR type = "meeting") AND (contains(applications, this.file.link) OR contains(this.projects, file.link))
SORT file.mtime DESC
```

## Application Documents

```dataviewjs
const prefix = dv.current().file.folder + "/";
const files = app.vault.getFiles().filter(file => file.path.startsWith(prefix) && file.path !== dv.current().file.path);
dv.list(files.map(file => dv.fileLink(file.path)));
```

## Related Notes

```dataview
LIST
FROM "Notes"
WHERE type = "note" AND contains(applications, this.file.link)
SORT file.mtime DESC
```
