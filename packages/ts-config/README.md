<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# TS Config

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Fts-config)](https://www.npmjs.com/package/@apitree.cz/ts-config)

### [TypeScript](https://typescriptlang.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/ts-config typescript
```

In a monorepo, install the package in the root, then create configs in each workspace.

## Usage

Add one of the following configurations to your `tsconfig.json`:

### Root

Suitable for monorepo root.

```json
{
  "extends": "@apitree.cz/ts-config",
  "include": ["./*.js", "./*.ts", "./packages/*/*.config.js", "./packages/*/*.config.ts"],
  "exclude": ["node_modules"]
}
```

> ⚠️ Do not use this configuration in monorepo workspaces or single-package repositories. Pick one of the following
> instead.

### App

Suitable for React SPAs.

```json
{
  "extends": "@apitree.cz/ts-config/app",
  "exclude": ["build", "node_modules"]
}
```

### Library

Suitable for distributable `npm` packages (framework-agnostic).

```json
{
  "extends": "@apitree.cz/ts-config/library",
  "exclude": ["dist", "node_modules"]
}
```

#### Configuration in Monorepos

In order for your IDE and tools to correctly resolve paths for internal libraries in monorepos, separate your configuration into:

`tsconfig.json` - Main configuration for type checking:

```json
{
  "extends": "@apitree.cz/ts-config/library",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["./src"],
  "exclude": ["dist", "node_modules"]
}
```

`tsconfig.build.json` - Build configuration (inherits from tsconfig.json):

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": { "noEmit": false }
}
```

If your package also contains other non-src directories (e.g. `tests`, `scripts`, etc.), create a separate `tsconfig.json` in each of those folders:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "rootDir": ".."
  },
  "include": [".."]
}
```

This is necessary for both your IDE and CLI `typescript-eslint` to correctly type-check and lint all files in your package.

### Node.js

Suitable for Node.js services and apps.

```json
{
  "extends": "@apitree.cz/ts-config/nodejs",
  "exclude": ["build", "node_modules"]
}
```

### Next.js

Suitable for Next.js apps.

```json
{
  "extends": "@apitree.cz/ts-config/nextjs",
  "include": [".next/types/**/*.ts", "**/*"],
  "exclude": [".next/**/*.js", "node_modules"]
}
```

### Nest.js

Suitable for Nest.js apps.

```json
{
  "extends": "@apitree.cz/ts-config/nestjs",
  "exclude": ["build", "node_modules"]
}
```
