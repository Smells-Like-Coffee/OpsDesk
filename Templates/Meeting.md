---
type: meeting
projects: []
applications: []
kb_articles: []
date: {{date:YYYY-MM-DD}}
---

# {{title}}

[[Meetings/Meetings Dashboard|← Meetings Dashboard]]

## Participants


## Notes


## Decisions


## Action Items

- [ ] 

## Directly Related KB Articles

```dataview
LIST
FROM "KB"
WHERE type = "kb" AND (contains(this.kb_articles, file.link) OR any(map(projects, (p) => contains(this.projects, p))))
SORT file.name ASC
```


## KB Articles for the Same Application

```dataview
LIST
FROM "KB"
WHERE type = "kb" AND any(map(applications, (a) => contains(this.applications, a))) AND !contains(this.kb_articles, file.link) AND !any(map(projects, (p) => contains(this.projects, p)))
SORT file.name ASC
```
