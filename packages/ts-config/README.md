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

### Root

Suitable for monorepo root.

```json
{
  "extends": "@apitree.cz/ts-config",
  "include": ["./*.js", "./*.ts"],
  "exclude": ["node_modules"]
}
```

> ⚠️ Do not use this configuration in monorepo workspaces or single-package repositories. Pick one of the following
> configurations instead.

### App

Suitable for React SPAs.

```json
{
  "extends": "@apitree.cz/ts-config/app",
  "include": ["**/*.js", "**/*.ts", "**/*.tsx"],
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

### Node.js

Suitable for Node.js services and apps.

```json
{
  "extends": "@apitree.cz/ts-config/nodejs",
  "include": ["**/*.js", "**/*.ts", "**/*.tsx"],
  "exclude": ["build", "node_modules"]
}
```

### Next.js

Suitable for Next.js apps.

```json
{
  "extends": "@apitree.cz/ts-config/nextjs",
  "include": [".next/types/**/*.ts", "./*.js", "./*.ts", "src/**/*.js", "src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
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
