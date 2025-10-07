[**@apitree.cz/cli**](../README.md)

---

# Interface: SyncProjectReferencesTsConfigs

Defined in: [types.ts:11](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L11)

## Properties

### build?

> `optional` **build**: `string`

Defined in: [types.ts:21](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L21)

Name of the TS config file for build.

#### Default Value

`'tsconfig.build.json'`

---

### default?

> `optional` **default**: `string`

Defined in: [types.ts:16](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L16)

Name of the main TS config file.

#### Default Value

`'tsconfig.json'`

---

### lib?

> `optional` **lib**: `string`

Defined in: [types.ts:26](https://github.com/ApiTreeCZ/toolbox/blob/main/packages/cli/src/commands/sync-project-references/types.ts#L26)

Name of the TS config file for distributable libraries.

#### Default Value

`'tsconfig.lib.json'`
