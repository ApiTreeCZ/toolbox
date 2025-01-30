<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://raw.githubusercontent.com/ApiTreeCZ/toolbox/refs/heads/develop/public/apitree.png?v=2025-01-28" width="201" />
</a>

# TS Config

### [TypeScript](https://typescriptlang.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/ts-config typescript
```

## Usage

Add one of the following configurations to your `tsconfig.json`:

### Base

Suitable for general TypeScript projects.

```json
{
  "extends": "@apitree.cz/ts-config",
  "include": ["**/*.js", "**/*.ts"],
  "exclude": ["build", "node_modules"]
}
```

> **Note:** This configuration can be also used in monorepo root, however, be sure to change `include` array to only
> check the root files and not nested workspaces as each should have its own `tsconfig.json`.

### Node.js

Suitable for Node.js services and apps.

```json
{
  "extends": "@apitree.cz/ts-config/nodejs",
  "include": ["**/*.js", "**/*.ts"],
  "exclude": ["build", "node_modules"]
}
```

### Library

Suitable for distributable `npm` packages (framework-agnostic).

```json
{
  "extends": "@apitree.cz/ts-config/library",
  "include": ["**/*.js", "**/*.ts", "**/*.tsx"],
  "exclude": ["dist", "node_modules"]
}
```

### App

Suitable for SPAs (React).

```json
{
  "extends": "@apitree.cz/ts-config/app",
  "include": ["**/*.js", "**/*.ts", "**/*.tsx"],
  "exclude": ["build", "node_modules"]
}
```

### Next.js

Suitable for Next.js apps.

```json
{
  "extends": "@apitree.cz/ts-config/nextjs",
  "include": ["next-env.d.ts", "**/*.js", "**/*.ts", "**/*.tsx"],
  "exclude": [".next", "node_modules"]
}
```

### Nest.js

Suitable for Nest.js apps.

```json
{
  "extends": "@apitree.cz/ts-config/nestjs",
  "include": ["**/*.js", "**/*.ts"],
  "exclude": ["build", "node_modules"]
}
```
