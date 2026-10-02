# Daily Notes

[[ReadMe|Home]] · [[Setup|Setup]]

## Open your workday

Press Ctrl+P and run **Daily notes: Open today's daily note**. Obsidian creates Daily Notes/YYYY-MM-DD.md from Templates/Daily Note.md if it does not exist. Opening it again returns to that same note.

## Use the sections

| Section | What to do |
| --- | --- |
| Date and dashboard links | Confirm the day; navigate to KB, Meetings, Projects, or Notes |
| Creation buttons | Name and create a separate entry, optionally linked to a project/application |
| Created Today | Follow automatically recorded links to entries created from this daily note |
| Unfinished ToDos | Review unchecked tasks from earlier daily notes, including across skipped days |
| Open Meeting and Project Actions | Review unchecked tasks from Meetings and Projects, regardless of date |
| New ToDos | Add today's tasks using Create New ToDo |
| General Notes / Scratch Pad | Capture quick thoughts, calls, troubleshooting observations, and temporary text |

## Add a task

Click **Create New ToDo**, then replace Task description with the actual task. TicketNumber, Product, User, and Note are optional. They are ordinary nested Markdown text, not searchable task properties.

Example: Investigate print failures; TicketNumber: INC12345; Product: Print Services; User: requesting user; Note: failures began after maintenance.

Leave the checkbox unchecked until finished. Check it here or in a displayed task list. Empty tasks and unchanged Task description placeholders are hidden from the open-task queries; canceled [-] tasks are also excluded.

## Understand carryover

Unfinished ToDos searches earlier Daily Notes, not just yesterday. It excludes today's tasks because they already appear under New ToDos. Completed tasks stop appearing in these live views, including when viewing an old daily note; this is not a frozen historical task report.

Meeting/project actions appear separately. Tasks in Notes and KB are not collected into this daily task view. Project status Completed does not suppress an unchecked project task: resolve or explicitly cancel the action itself.

## Create and reference an entry

Click the appropriate button, enter its name, choose optional relationships, and click Create. The new note opens and a timestamped link is saved in the originating daily note. Cancel creates nothing. Filenames for meetings, notes, and general KB articles contain the date and entered name, without a time.

## Screenshots and end-of-day review

Paste a screenshot beside the task or observation it supports. Images go to Daily Notes/Attachments with the recommended setting. At day's end, check completed tasks and move lasting knowledge into a KB article; keep the daily record and link to the article.
