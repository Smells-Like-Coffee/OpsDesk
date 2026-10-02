---
date: {{date:YYYY-MM-DD}}
type: daily
---

# {{date:dddd, MMMM D, YYYY}}

[[KB/KB Dashboard|KB]] · [[Meetings/Meetings Dashboard|Meetings]] · [[Projects/Projects Dashboard|Projects]] · [[Notes/Notes Dashboard|Notes]] · [[Vault Guide/ReadMe|Vault Guide]]

```dataviewjs
await dv.view("System/Scripts/VaultEntryButtons", { actions: ["meeting","project","note","kb","application"] });
```

## Created Today


## Unfinished ToDos

```dataview
TASK
FROM "Daily Notes"
WHERE !completed AND status != "-" AND file.day < this.file.day AND regextest("\\S", text) AND text != "Task description"
SORT file.day ASC
GROUP BY file.link
```

## Open Meeting and Project Actions

```dataview
TASK
FROM "Meetings" OR "Projects"
WHERE !completed AND status != "-" AND regextest("\\S", text) AND text != "Task description"
GROUP BY file.link
```

## New ToDos

```dataviewjs
await dv.view("System/Scripts/VaultEntryButtons", { actions: ["todo"] });
```

- [ ] Task description
  - **TicketNumber:**
  - **Product:**
  - **User:**
  - **Note:**

## General Notes / Scratch Pad







