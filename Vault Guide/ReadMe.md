# OpsDesk — An Obsidian workspace for IT operations

Your workday, project history, and reusable knowledge in one place.

## Start here

New to this vault? Follow [[Setup]] first. Then run **Daily notes: Open today's daily note** from the command palette (Ctrl+P).

Use the daily note as your starting point. Capture quick requests and tasks there; use its buttons for work that needs a separate note. Items created through the daily note are linked automatically under **Created Today**.

## Where things belong

| Section | Use it for | Guide |
| --- | --- | --- |
| Daily Notes | Today's work, tasks, interruptions, scratch notes | [[Daily Notes Guide]] |
| KB | Application overviews, fixes, procedures, institutional knowledge | [[KB Guide]] |
| Meetings | Participants, discussion, decisions, actions | [[Meetings Guide]] |
| Notes | General working notes that are not yet a procedure or project | [[Notes Guide]] |
| Projects | Ongoing initiatives, next actions, progress, documents | [[Projects Guide]] |
| Templates | Starting layouts for new entries | [[Templates Guide]] |

Open [[KB/KB Dashboard|KB]], [[Meetings/Meetings Dashboard|Meetings]], [[Projects/Projects Dashboard|Projects]], or [[Notes/Notes Dashboard|Notes]] to browse and create entries.

## A typical day

1. Open today's daily note and review **Unfinished ToDos** and **Open Meeting and Project Actions**.
2. Click **Create New ToDo** for a quick request. Enter the description; add ticket, product, user, and notes when useful.
3. Use **New Meeting**, **New Project**, **New Note**, **New KB Article**, or **New KB Application** when the item needs its own page.
4. Select an existing project/application in the creation dialog when relevant. These selections are optional.
5. During work, record decisions and results in the appropriate note. Paste screenshots where they support the work.
6. Before finishing, check completed tasks, record remaining actions, and update project status. Turn reusable fixes into KB articles.

## Connect the information

Use the **applications** list to link to an application's KB overview. Use **projects** to link meetings, notes, or articles to a project. Use **kb_articles** on meetings/projects to reference a specific fix or procedure. In Properties, type [[ to choose a real note link.

Example: Print Services application → Print Server Migration project → Planning meeting. Select the application when creating the project, then select that project when creating the meeting. If no application is explicitly selected, the meeting inherits the project's application links at creation.

Inheritance is a one-time copy: later project changes do not automatically rewrite other notes. Related lists reflect the links actually saved in each note.

## Important behavior

- Tasks are displayed from their original notes, not copied daily. Checking a displayed task updates its source.
- Only creation from a daily note adds a **Created Today** reference. Dashboard creation does not.
- Pasted attachments go into an **Attachments** subfolder beside the note's folder when configured as described in Setup.
- Renaming or moving notes inside Obsidian helps preserve links. Editing the filename does not automatically change its heading.
- New templates affect future entries. Existing notes keep their content and layout.

These guides supersede Daily Notes Setup, Dashboard Setup, KB Types Guide, Project and Links Guide, Workflow Setup, and their duplicate copies. They document the vault inspected on October 1, 2026.

## Consistency update

All dashboards share navigation, including Vault Guide. Main listings use entry types. Creation offers a Meeting date, optional application-folder filing for KB articles, and recovery of a daily reference if saving it fails. Projects offer a status dropdown and a dashboard view for closed projects with open actions. See the updated section guides for details.

## Editable dashboard tables

Projects, Meetings, Notes, and KB now use Bases for editable property tables. Keep using the existing creation buttons. Dataview continues to handle tasks and related entries. See [[Vault Guide/Section Guides/Bases Guide|Bases Guide]].

## System folder

System/Bases contains dashboard table definitions. System/Scripts contains the shared button logic. Keep System collapsed during ordinary use; create and edit work in Daily Notes, KB, Meetings, Notes, and Projects. Templates and Vault Guide provide layouts and help. System files should be changed only when maintaining the workflow.

