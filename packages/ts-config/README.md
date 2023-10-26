<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# TS Config

### [TypeScript](https://typescriptlang.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree/ts-config typescript
```

## Usage

Add one of the following configurations to your `tsconfig.json`:

### Library

Suitable for distributable `npm` packages (both Node.js and React).

```json
{
  "extends": "@apitree/ts-config/library",
  "include": [".eslintrc.cjs", "**/*.js", "**/*.ts"],
  "exclude": ["dist", "node_modules"]
}
```

> **Note:** If you are using React, you should also add `"**/*.tsx"` to the `include` array.

### App

Suitable for stand-alone applications (both Node.js and React).

```json
{
  "extends": "@apitree/ts-config/app",
  "include": [".eslintrc.cjs", "**/*.js", "**/*.ts"],
  "exclude": ["build", "node_modules"]
}
```

> **Note:** If you are using React, you should also add `"**/*.tsx"` to the `include` array.

### Next.js

Suitable for Next.js apps.

```json
{
  "extends": "@apitree/ts-config/next",
  "include": [
    ".eslintrc.cjs",
    "next-env.d.ts",
    "**/*.js",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [".next", "node_modules"]
}
```
