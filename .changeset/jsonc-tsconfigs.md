---
'@apitree.cz/cli': patch
---

`sync-project-references` now edits only the `references` property of TS configs (JSONC-aware), keeping comments, trailing commas, key order and formatting. TS configs are written only when their references change. The command now fails with a non-zero exit code when a TS config can't be read or parsed.
