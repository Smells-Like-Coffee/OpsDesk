# Bases dashboard tables

[[Vault Guide/ReadMe|Home]] · [[Vault Guide/Setup|Setup]]

Open a section dashboard and use its embedded Base table. Click a note name to open the note. Editable property cells update the underlying note directly; file timestamps are read-only. Select the named view in the Base toolbar, or open its .base file directly to manage views.

| Base | Views |
| --- | --- |
| Projects | Active and Waiting; All Projects; By Status |
| Meetings | All Meetings; Upcoming; Past Meetings |
| Notes | All Notes; Unlinked Notes |
| KB | Applications; General Articles; Other KB Notes |

Upcoming includes today and future meeting dates; Past Meetings excludes today. Unlinked Notes have neither project nor application links. Project status values remain Active, Waiting, Completed, and Cancelled; keep those spellings when editing the table. Missing status is included in Active and Waiting.

Use the existing dashboard or daily creation buttons to add entries. They handle templates, names, project/application folders, optional relationships, and daily references. A Base's own generic creation function does not replace that workflow.

The KB table only exposes saved Properties. Vendor and SME remain body fields under Support Details, so they are not editable Base columns. Project and application document lists still use Dataview. Daily task capture/carryover is unchanged; no Base is provided for Templates or Scripts because they are workflow support files.

Bases include notes from their section's subfolders, exclude attachments, and use type properties for typed views. The Notes and Projects Bases exclude supporting Markdown files without the expected type. KB's Other KB Notes view makes untyped articles visible.

If a table is empty, create an entry with the matching button or check its type property. Refresh/reopen a dashboard if necessary. Changing a template does not alter existing notes.
