---
'@apitree.cz/cli': minor
---

Remove `lib` configuration option from sync-project-references

The `lib` property has been removed from the `SyncProjectReferencesTsConfigs` interface and default configuration. This option was never actually used by the CLI and has been deprecated in favor of a simpler two-config pattern (tsconfig.json and tsconfig.build.json).

If you have custom configuration that references `tsConfigs.lib`, you can safely remove it as it had no effect.
