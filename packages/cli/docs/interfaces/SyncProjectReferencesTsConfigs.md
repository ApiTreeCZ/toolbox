# Interface: SyncProjectReferencesTsConfigs

## Table of contents

### Properties

- [build](SyncProjectReferencesTsConfigs.md#build)
- [cjs](SyncProjectReferencesTsConfigs.md#cjs)
- [default](SyncProjectReferencesTsConfigs.md#default)
- [esm](SyncProjectReferencesTsConfigs.md#esm)

## Properties

### build

• `Optional` **build**: `string`

Name of the TS config file for build.

**`Default Value`**

`'tsconfig.build.json'`

#### Defined in

[commands/sync-project-references/types.ts:21](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L21)

---

### cjs

• `Optional` **cjs**: `string`

Name of the TS config file for CJS build (ambient modules only).

**`Default Value`**

`'tsconfig.cjs.build.json'`

#### Defined in

[commands/sync-project-references/types.ts:26](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L26)

---

### default

• `Optional` **default**: `string`

Name of the main TS config file.

**`Default Value`**

`'tsconfig.json'`

#### Defined in

[commands/sync-project-references/types.ts:16](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L16)

---

### esm

• `Optional` **esm**: `string`

Name of the TS config file for ESM build (ambient modules only).

**`Default Value`**

`'tsconfig.esm.build.json'`

#### Defined in

[commands/sync-project-references/types.ts:31](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L31)
