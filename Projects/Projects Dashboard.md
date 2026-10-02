# Projects

[[KB/KB Dashboard|KB]] · [[Meetings/Meetings Dashboard|Meetings]] · [[Projects/Projects Dashboard|Projects]] · [[Notes/Notes Dashboard|Notes]] · [[Vault Guide/ReadMe|Vault Guide]]

```dataviewjs
await dv.view("System/Scripts/VaultEntryButtons", { actions: ["project"] });
```

## Projects

![[System/Bases/Projects.base#Active and Waiting]]

Switch the Base view to All Projects or By Status to review other work.

## Completed or Cancelled Projects with Open Actions

```dataview
TASK
FROM "Projects"
WHERE !completed AND status != "-" AND regextest("\\S", text) AND text != "Task description" AND (lower(default(file.frontmatter.status, "")) = "completed" OR lower(default(file.frontmatter.status, "")) = "cancelled")
GROUP BY file.link
```


