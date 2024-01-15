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

[commands/sync-project-references/types.ts:24](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L24)

---

### cjs

• `Optional` **cjs**: `string`

Name of the TS config file for CJS build (ambient modules only).

**`Default Value`**

`'tsconfig.cjs.build.json'`

#### Defined in

[commands/sync-project-references/types.ts:29](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L29)

---

### default

• `Optional` **default**: `string`

Name of the main TS config file.

**`Default Value`**

`'tsconfig.json'`

#### Defined in

[commands/sync-project-references/types.ts:19](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L19)

---

### esm

• `Optional` **esm**: `string`

Name of the TS config file for ESM build (ambient modules only).

**`Default Value`**

`'tsconfig.esm.build.json'`

#### Defined in

[commands/sync-project-references/types.ts:34](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/cli/src/commands/sync-project-references/types.ts#L34)
