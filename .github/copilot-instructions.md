# GitHub Copilot Instructions

This file provides context to GitHub Copilot for generating inline code suggestions in the ApiTree Toolbox monorepo.

## Module System

- **Always use ESM syntax** - This codebase is ESM-only with `"type": "module"` in all package.json files
- Use `import`/`export`, never `require()`/`module.exports`
- File extensions required for relative imports: `import { foo } from './utils.js'` (use `.js` even for `.ts` files)
- Use `import type` for type-only imports: `import type { Config } from './types.js'`

## TypeScript Patterns

- **Strict mode always enabled** - Follow strict TypeScript patterns
- Prefer explicit return types on exported functions
- Use type guards (`isNil`, `notNil`) from `@apitree.cz/ts-utils` instead of loose null checks
- Avoid `any` - use `unknown` and narrow with type guards
- For config objects, prefer `as const` assertions or explicit types
- Use readonly arrays and objects where immutability is expected

## Configuration Package Patterns

When working in configuration packages (eslint-config, prettier-config, vitest-config, etc.):

```typescript
// Export pattern for single config
export const config = {
  // configuration
} as const;

// Export pattern for multiple variants
export const base = [...configs];
export const react = [...base, ...reactConfigs];
export const nextjs = [...react, ...nextjsConfigs];
```

- Config packages are **buildable TypeScript modules**, not static JSON
- Always export configs that can be imported and composed
- Use JSDoc comments to document config options and variants

## ESLint Flat Config Pattern

When adding to eslint-config:

```typescript
import plugin from 'eslint-plugin-name';
import { defineConfig } from '@typescript-eslint/utils';

export default defineConfig([
  {
    plugins: {
      'plugin-name': plugin,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'plugin-name/rule': 'error',
    },
  },
]);
```

- Use file-specific overrides with `files` property
- Organize by file type: base JS, TS, TSX, test files
- Import plugins at top, register in `plugins` object, apply rules separately

## Testing Patterns

- **Use Vitest**, never Jest
- Test files: `*.test.ts`, `*.spec.ts`, `*.tests.ts` in `/tests` directory
- Import from `@apitree.cz/testing-library` for React component tests
- Use `describe`, `it`, `expect` from Vitest

```typescript
import { describe, expect, it } from 'vitest';

describe('functionName', () => {
  it('should do something', () => {
    expect(result).toBe(expected);
  });
});
```

For React components:

```typescript
import { render, screen } from '@apitree.cz/testing-library';

it('renders component', () => {
  render(<Component />);
  expect(screen.getByText('text')).toBeInTheDocument();
});
```

## Package Structure Patterns

Every package should have consistent scripts in package.json:

```json
{
  "scripts": {
    "prebuild": "del dist tsconfig.build.tsbuildinfo",
    "build": "tsc --build tsconfig.build.json",
    "cleanup": "del dist tsconfig.*.tsbuildinfo .eslintcache coverage",
    "fix": "run-p ts format:fix lint:fix",
    "format": "prettier --ignore-path ../../.prettierignore --check .",
    "format:fix": "pnpm run format --write",
    "lint": "eslint --cache .",
    "lint:fix": "pnpm run lint --fix",
    "qa": "run-p ts format lint",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "ts": "tsc --build tsconfig.lib.json"
  }
}
```

## TypeScript Configuration Files

Each package needs three tsconfig files:

**tsconfig.json** - Main config for IDE:

```json
{
  "extends": "@apitree.cz/ts-config/library.json",
  "include": [],
  "references": [{ "path": "./tsconfig.lib.json" }]
}
```

**tsconfig.lib.json** - Type checking without emit:

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*", "tests/**/*"]
}
```

**tsconfig.build.json** - Build configuration:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## Dependency Patterns

- Use workspace protocol for internal dependencies: `"@apitree.cz/cli": "workspace:*"`
- Declare peer dependencies for config packages that extend tools
- Keep dependencies minimal - prefer peer dependencies where appropriate
- Use exact versions for tooling dependencies in root package.json

## Code Organization

- One export per file for clarity (exceptions: config variants, utilities)
- Group related files in directories: `/commands`, `/configs`, `/utils`
- Index files (`index.ts`) for clean public API exports
- Keep barrel exports minimal - prefer direct imports

## Commit Message Format

When suggesting commit messages or documenting changes:

```
<type>(<scope>): <message>

Types: feat, fix, chore, docs, refactor, test, ci
Scope: package name without @apitree.cz/ prefix

Examples:
feat(cli): add new sync-project-references command
fix(eslint-config): correct nextjs rule configuration
chore(deps): update vitest to v4.0.9
```

## Documentation

- Use JSDoc for exported functions and types
- Include `@param`, `@returns`, `@example` for public APIs
- Document configuration options and their effects
- TypeDoc generates API docs - ensure comments are comprehensive

## Error Handling

- Throw descriptive errors with context
- Use Error subclasses for specific error types
- Validate inputs with Zod for CLI commands and configs
- Provide actionable error messages with suggested fixes

## Import Order

Organize imports in this order:

1. Node.js built-ins
2. External dependencies
3. Internal workspace packages
4. Relative imports
5. Type imports (if not inlined)

```typescript
import { readFile } from 'node:fs/promises';

import { Command } from 'commander';
import { z } from 'zod';

import { equals } from '@apitree.cz/ts-utils';

import { parseConfig } from './config.js';
import { runCommand } from '../utils/runner.js';

import type { Options } from './types.js';
```

## Performance Considerations

- Use Turbo caching - ensure `outputs` in turbo.json match actual artifacts
- Prefer TypeScript project references over monolithic builds
- Keep test files fast - mock external dependencies
- Use `^build` dependency in turbo.json for tasks requiring built dependencies

## Avoid

- Don't use CommonJS (`require`, `module.exports`)
- Don't use Jest - use Vitest
- Don't create files outside established patterns
- Don't use relative imports without `.js` extension
- Don't skip TypeScript strict checks with `@ts-ignore` (use `@ts-expect-error` with explanation)
- Don't add dependencies without considering peer dependency pattern
- Don't create new top-level config files without updating turbo.json inputs
