# @apitree.cz/ts-utils

## Table of contents

### Functions

- [equals](README.md#equals)
- [isNil](README.md#isnil)
- [notNil](README.md#notnil)

## Functions

### equals

▸ **equals**(`a`, `b`): `boolean`

Strictly check if two values are equal.

#### Parameters

| Name | Type      |
| :--- | :-------- |
| `a`  | `unknown` |
| `b`  | `unknown` |

#### Returns

`boolean`

#### Defined in

[equals.ts:4](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/ts-utils/src/equals.ts#L4)

---

### isNil

▸ **isNil**\<`T`\>(`value`): value is undefined \| null

Checks if value IS `null` or `undefined`. Works as a type guard.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `value` | `undefined` \| `null` \| `T` |

#### Returns

value is undefined \| null

#### Defined in

[is-nil.ts:4](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/ts-utils/src/is-nil.ts#L4)

---

### notNil

▸ **notNil**\<`T`\>(`type`): type is NonNullable\<T\>

Checks if value IS NOT `null` or `undefined`. Works as a type guard.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type |
| :----- | :--- |
| `type` | `T`  |

#### Returns

type is NonNullable\<T\>

#### Defined in

[not-nil.ts:6](https://github.com/ApiTreeCZ/toolbox/blob/develop/packages/ts-utils/src/not-nil.ts#L6)
