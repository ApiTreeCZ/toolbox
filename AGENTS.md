# AGENTS.md

This file provides guidance to AI assistants (Gemini, Copilot, Claude, etc.) when working with code in this repository.

## Project Overview

ApiTree Toolbox is a Turbo-powered monorepo containing shared configurations and utilities for ApiTree projects. It provides standardized development tools for JavaScript/TypeScript projects including web apps, libraries, NestJS backends, and Next.js applications.

**Key characteristics:**

- Strict ESM-only module system
- TypeScript everywhere with strict type checking
- Conventional commits with Changesets for versioning
- pnpm workspaces with Node.js 24.x requirement

## Development Commands

```bash
pnpm install               # Install dependencies
pnpm run build             # Build all packages (via Turbo)
pnpm run test              # Run all tests
pnpm run test:coverage     # Run tests with coverage
pnpm run qa                # Type + lint + format checks
pnpm run fix               # Auto-fix all issues
pnpm run docs              # Generate TypeDoc documentation
pnpm run cleanup           # Clean build artifacts and caches
pnpm changeset             # Add changeset for version management
```

For targeted tasks use `turbo run --filter=<package>` (not `pnpm run --filter`) to ensure Turbo handles the dependency graph.

To test a single file: `cd packages/<name> && pnpm run test <pattern>`

## Architecture

### Monorepo Structure

The repository contains 9 packages under `/packages/`:

1. **@apitree.cz/cli** - CLI tool providing `apitree` command (primary: `sync-project-references`)
2. **@apitree.cz/eslint-config** - ESLint configurations with variants: base, react, nextjs, nestjs, storybook
3. **@apitree.cz/ts-config** - TypeScript configurations: base, app, library, nodejs, nextjs, nestjs
4. **@apitree.cz/ts-utils** - Utility functions: `equals`, `isNil`, `notNil`
5. **@apitree.cz/prettier-config** - Prettier configuration
6. **@apitree.cz/lint-staged-config** - Lint-staged configurations with variants
7. **@apitree.cz/vitest-config** - Vitest configurations: base, react, nestjs
8. **@apitree.cz/testing-library** - React Testing Library setup wrapper
9. **@apitree.cz/typedoc-config** - TypeDoc configuration

### Testing Architecture

- **Test runner:** Vitest (no Jest)
- **Component testing:** React Testing Library
- **Config validation:** Snapshot testing (eslint-config)
- **Coverage:** v8 provider with html, cobertura, lcovonly, text reports
- **Test files:** `*.test.ts`, `*.spec.ts`, `*.tests.ts` in `/tests` directories

## Important Files

- `/turbo.json` - Build orchestration and task definitions
- `/packages/cli/src/commands/sync-project-references/` - Core monorepo utility
- `/packages/eslint-config/src/` - Rule definitions organized by context
- `/.changesets/` - Changeset entries for next release
- `/packages/*/tsconfig.build.json` - Build configurations

## Key Architectural Decisions

1. **ESM-only:** All packages use `"type": "module"` requiring Node.js 24.x+
2. **Configuration as code:** Config packages are buildable TypeScript modules, not static JSON
3. **Automated project references:** `sync-project-references` CLI command maintains TypeScript composite builds
4. **Type-safe ESLint:** Uses typescript-eslint with projectService for full type information
5. **Changesets for versioning:** Coordinated releases with `updateInternalDependencies: "patch"`
