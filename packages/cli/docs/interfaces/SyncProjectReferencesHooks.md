[**@apitree.cz/cli**](../README.md)

---

# Interface: SyncProjectReferencesHooks

Defined in: [types.ts:3](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L3)

## Properties

### afterSync?

> `optional` **afterSync**: `string`[]

Defined in: [types.ts:8](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L8)

Hook called after the project references are synced.

#### Default Value

`['prettier --write']`
