---
type: kb
projects: []
applications: []
date: {{date:YYYY-MM-DD}}
---

# {{title}}

[[KB/KB Dashboard|← KB Dashboard]]

## Summary


## Symptoms / Issue


## Resolution / Procedure


## Commands / References

## Directly Related Work

```dataview
TABLE WITHOUT ID file.link AS "Entry", type AS "Type"
FROM "Projects" OR "Meetings"
WHERE (type = "project" OR type = "meeting") AND (contains(kb_articles, this.file.link) OR contains(this.projects, file.link) OR any(map(projects, (p) => contains(this.projects, p))))
SORT file.mtime DESC
```



## Other Work for This Application

```dataview
TABLE WITHOUT ID file.link AS "Entry", type AS "Type"
FROM "Projects" OR "Meetings"
WHERE (type = "project" OR type = "meeting") AND any(map(applications, (a) => contains(this.applications, a))) AND !(contains(kb_articles, this.file.link) OR contains(this.projects, file.link) OR any(map(projects, (p) => contains(this.projects, p))))
SORT file.mtime DESC
```
