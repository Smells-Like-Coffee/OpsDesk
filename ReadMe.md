<div align="center">

# OpsDesk
### An Obsidian workspace for IT operations

**A place for the workday—and the knowledge worth keeping.**

![Obsidian workspace](https://img.shields.io/badge/Obsidian-Workspace-7C3AED?style=for-the-badge&logo=obsidian&logoColor=white)
![Dataview required](https://img.shields.io/badge/Dataview-Required-2563EB?style=for-the-badge)
![Bases dashboards](https://img.shields.io/badge/Bases-Editable%20Dashboards-0D9488?style=for-the-badge)

[**Download the vault**](Downloads/OpsDesk%20Share.zip) · [**Setup guide**](Vault%20Guide/Setup.md) · [**Workflow guide**](Vault%20Guide/ReadMe.md)

</div>

---

OpsDesk helps systems administrators and IT operations teams keep up with quick requests, troubleshooting, meetings, and longer projects. Start in a daily note, capture the interruption, and connect the work to the application or project it belongs to.

A meeting can point to a project. That project can point to an application's KB overview. A fix can become a reusable article. Your daily note keeps links to the entries you create along the way.

## What you get

| Feature | How it helps |
| --- | --- |
| **Daily work hub** | Dated notes, navigation, quick capture, and a scratch pad |
| **Task carryover** | Unfinished tasks from earlier daily notes stay visible across skipped days |
| **One-click entry creation** | Buttons prompt for details and create meetings, projects, notes, and KB entries |
| **Created Today references** | Entries created from a daily note are linked back to that day automatically |
| **Connected work** | Optional application, project, and KB article links provide context |
| **Dedicated project folders** | Each project has room for its note, PDFs, downloads, and supporting documents |
| **Two kinds of KB** | Application overviews with Vendor/SME details, plus general fixes and procedures |
| **Editable dashboards** | Obsidian Bases tables make entries and properties easy to browse |
| **Organized attachments** | Screenshots and other attachments go into an Attachments subfolder beside the working note's folder |

## Get started

1. **[Download OpsDesk Share.zip](Downloads/OpsDesk%20Share.zip).** On the GitHub file page, choose **Download raw file**.
2. **Extract the complete ZIP.** Keep the hidden `.obsidian` folder and the included folders together. A convenient Windows location is `%USERPROFILE%\Documents\OpsDesk`.
3. **Open it in Obsidian desktop.** Choose **Open folder as vault** and select the extracted **OpsDesk** folder.
4. **Install and enable Dataview.** In **Settings → Community plugins**, browse for **Dataview by Michael Brenan**, then turn on **Enable JavaScript queries** in its settings.
5. **Enable the core plugins:** **Daily notes**, **Templates**, and **Bases**.
6. Press **Ctrl+P**, run **Daily notes: Open today's daily note**, and start capturing work.

> **Start with a separate vault.** Before merging OpsDesk into an existing vault, back it up and follow the [Setup guide](Vault%20Guide/Setup.md). Avoid overwriting an existing `.obsidian` folder wholesale.

`%USERPROFILE%` resolves to your own Windows user folder when entered in File Explorer. You can also store the vault elsewhere.

## A workday in OpsDesk

**Review → Capture → Connect → Resolve → Preserve**

- **Review:** Open today's note and check unfinished daily tasks and meeting/project actions.
- **Capture:** Use **Create New ToDo** for a quick issue; add ticket number, product, user, and notes when useful.
- **Connect:** Create a meeting or project and select its related application or project.
- **Resolve:** Record decisions, check completed actions, and update project status.
- **Preserve:** Turn a useful solution into a KB article and keep the links to its context.

## Where everything lives

| Folder | Purpose | Instructions |
| --- | --- | --- |
| **Daily Notes** | Daily tasks, interruptions, and scratch notes | [Daily Notes guide](Vault%20Guide/Section%20Guides/Daily%20Notes%20Guide.md) |
| **KB** | Application details, solutions, and institutional knowledge | [KB guide](Vault%20Guide/Section%20Guides/KB%20Guide.md) |
| **Meetings** | Discussion, decisions, and follow-up actions | [Meetings guide](Vault%20Guide/Section%20Guides/Meetings%20Guide.md) |
| **Notes** | General working notes and observations | [Notes guide](Vault%20Guide/Section%20Guides/Notes%20Guide.md) |
| **Projects** | Project history, status, actions, and documents | [Projects guide](Vault%20Guide/Section%20Guides/Projects%20Guide.md) |
| **Templates** | Starting layouts for each entry type | [Templates guide](Vault%20Guide/Section%20Guides/Templates%20Guide.md) |
| **System** | Shared button script and Bases definitions | [Bases guide](Vault%20Guide/Section%20Guides/Bases%20Guide.md) |
| **Vault Guide** | Setup and everyday-use documentation | [Workflow guide](Vault%20Guide/ReadMe.md) |

Keep **System** collapsed during ordinary use. Work in your content folders; use **Templates** when maintaining layouts.

## Requirements

- **Obsidian desktop**, with Daily notes, Templates, and Bases enabled.
- **Dataview**, the only required community plugin. Install it through Obsidian; its executable files are not bundled.
- **Dataview JavaScript queries enabled**, for creation buttons and related-entry views.

Tasks, QuickAdd, Buttons, Templater, and rollover plugins are not required. See [Setup](Vault%20Guide/Setup.md) for the complete settings, attachment configuration, and troubleshooting checklist.

## Useful details

- Task carryover is a **live view of the original tasks**. Checking a displayed task updates its source; tasks are not copied into each day.
- **Dashboard creation** creates an entry without adding a daily reference. Use the daily-note buttons when you want that reference.
- Relationship selections are optional. Application links inherited from a project are copied **once at creation**.
- New templates affect future entries. Existing notes keep their content and layout.
- Move and rename notes inside Obsidian to help preserve links.
- Back up the **complete vault**, including settings, System files, notes, and attachments.

## About the download

The ZIP contains a clean starter vault: templates, dashboards, support files, guides, and portable configuration. Daily Notes starts empty. Personal work notes, dated daily entries, workspace/tab state, sync configuration, and credentials are excluded.

The workflow has been used in Obsidian. Package configuration, script syntax, and file references have been checked; a fresh-machine installation has not been tested.

---

<div align="center">

**OpsDesk** · Capture the work. Connect the context. Keep the knowledge.

</div>
