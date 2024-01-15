# Interface: SyncProjectReferencesConfig

## Table of contents

### Properties

- [hooks](SyncProjectReferencesConfig.md#hooks)
- [scopes](SyncProjectReferencesConfig.md#scopes)
- [tsConfigs](SyncProjectReferencesConfig.md#tsconfigs)

## Properties

### hooks

• `Optional` **hooks**: [`SyncProjectReferencesHooks`](SyncProjectReferencesHooks.md)

Custom hooks to run as parts of the sync process.

#### Defined in

[commands/sync-project-references/types.ts:41](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L41)

---

### scopes

• `Optional` **scopes**: `string`[]

Packages scope to use for the project.

**`Default Value`**

`'@apitree.cz'`

#### Defined in

[commands/sync-project-references/types.ts:46](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L46)

---

### tsConfigs

• `Optional` **tsConfigs**: [`SyncProjectReferencesTsConfigs`](SyncProjectReferencesTsConfigs.md)

Custom names for TS config files.

#### Defined in

[commands/sync-project-references/types.ts:50](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L50)
