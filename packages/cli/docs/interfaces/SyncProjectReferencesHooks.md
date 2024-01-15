# Interface: SyncProjectReferencesHooks

## Table of contents

### Properties

- [afterSync](SyncProjectReferencesHooks.md#aftersync)
- [runner](SyncProjectReferencesHooks.md#runner)

## Properties

### afterSync

• `Optional` **afterSync**: `string`[]

Hook called after the project references are synced.

**`Default Value`**

`['prettier --write']`

#### Defined in

[commands/sync-project-references/types.ts:6](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L6)

---

### runner

• `Optional` **runner**: `"npx"` \| `"pnpm"` \| `"yarn"`

Package manager runner to use for running the hooks.

**`Default Value`**

`'pnpm'`

#### Defined in

[commands/sync-project-references/types.ts:11](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L11)
