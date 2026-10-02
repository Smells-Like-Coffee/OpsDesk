# KB — Knowledge Base

[[ReadMe|Home]] · [[KB/KB Dashboard|Open KB Dashboard]]

## Choose the entry type

**New KB Application** creates a central home for an application, server, or product. Enter its name; the result is KB/Application Name/Application Name.md. An existing folder of that name is protected, so open its existing note instead of creating it again.

**New KB Article** uses the general KB Entry template for institutional knowledge, procedures, and issue resolutions. Enter a meaningful title, such as Restore a Deleted AD Object. The result is KB/YYYY-MM-DD - Title.md. Choose an application or project when relevant, or leave both blank.

Use the daily buttons to also record a daily reference, or the KB Dashboard buttons when a daily reference is unnecessary.

## Application overview

Fill in Overview, Servers / Environment, Support Details, Notes / Known Issues, and Procedures / References. **Vendor** and **SME** are text fields under Support Details, not Properties.

The application note automatically lists related KB articles and projects/meetings whose applications property points to it. Its optional projects list can also identify specific projects.

Copy supporting documents into the application folder. Application Documents lists other files in that folder and subfolders, including notes and PDFs; it is not limited to attachments.

## General article

Record the Summary, Symptoms / Issue, Resolution / Procedure, and Commands / References. For knowledge without an incident, use the sections that apply; unused headings can remain blank or be removed.

An application-specific fix can use this same template. Select the application during creation, then optionally move the article into the application's folder using Obsidian. By default creation puts general articles at the KB root; the application-folder option changes that destination.

## Relationships and dashboard

Keep type as application for overview notes and kb for general articles. Add real note links to projects and applications using Properties. The dashboard separates Application KB, General KB Entries, and Other KB Notes.

General articles show related projects/meetings based on saved references and shared application/project links. Sharing an application may surface other work about that system, not only the specific incident.

Pasted images go to Attachments under the article's current folder: KB/Attachments at the root, or KB/Application Name/Attachments inside an application folder.

## Application-folder filing

For a general article, select Related application and check Store in selected application’s folder to create it there directly. Leave the option unchecked for a KB-root article. Application overview creation retains a selected project but does not inherit other application links. General articles separate Directly Related Work from Other Work for This Application. Application overviews now include Related Notes.

## Dashboard Base

The main listing is now an editable Base table. Use its view selector to change views and edit Properties directly. Creation buttons and relationship behavior remain unchanged. See [[Vault Guide/Section Guides/Bases Guide|Bases Guide]].
