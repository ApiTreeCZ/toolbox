# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ApiTree Toolbox is a Turbo-powered monorepo containing shared configurations and utilities for ApiTree projects. It provides standardized development tools for JavaScript/TypeScript projects including web apps, libraries, NestJS backends, and Next.js applications.

**Key characteristics:**

- Strict ESM-only module system
- TypeScript everywhere with strict type checking
- Conventional commits with Changesets for versioning
- pnpm workspaces with Node.js 24.x requirement

## Development Commands

### Setup

```bash
pnpm install        # Install dependencies
pnpm run setup      # Build all packages (runs build)
```

### Building

```bash
pnpm run build      # Build all packages (via Turbo)
turbo build --filter="./packages/cli"  # Build specific package
```

### Testing

```bash
pnpm run test                # Run all tests
pnpm run test:coverage       # Run tests with coverage
turbo test --filter="@apitree.cz/ts-utils"  # Test specific package
```

**Testing a single test file:**

```bash
cd packages/<package-name>
pnpm run test <test-file-pattern>  # e.g., pnpm run test equals.test.ts
```

### Linting and Formatting

```bash
pnpm run qa         # Run all quality checks (ts + lint + format)
pnpm run lint       # Lint all packages
pnpm run lint:fix   # Fix linting issues
pnpm run format     # Check formatting
pnpm run format:fix # Fix formatting issues
pnpm run fix        # Run all fixes (ts + format:fix + lint:fix)
pnpm run ts         # Type check all packages
```

### Documentation

```bash
pnpm run docs       # Generate TypeDoc documentation for all packages
```

### Cleanup

```bash
pnpm run cleanup    # Clean all build artifacts, caches, and dependencies
```

### Monorepo Management

```bash
pnpm run sync-project-references  # Sync TypeScript project references
```

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

### Package Dependencies

Internal dependencies use workspace protocol:

```json
"@apitree.cz/cli": "workspace:*"
```

**Dependency chain:**

- `cli` depends on `ts-utils`
- Most packages are independent configuration packages

### TypeScript Configuration Pattern

Each package has two TypeScript config files:

- `tsconfig.json` - Main config (extends from ts-config package, used for type checking)
- `tsconfig.build.json` - Build config with `noEmit: false` (inherits from tsconfig.json)

**Configuration hierarchy:**

```
base.json (strict, ESNext, nodenext)
├── nodejs.json (adds lib, nodejs globals)
├── library.json (adds composite: true for project references)
├── nextjs.json (overrides module/moduleResolution)
└── app.json (jsx: preserve, bundler resolution)
```

### Build System

**Turbo orchestration:**

- Tasks defined in `turbo.json` with dependency chains
- All tasks depend on `^build` (dependencies build first)
- Remote caching with signatures enabled
- TUI mode for better build visibility

**Build flow:**

```
build → tsc --build tsconfig.build.json
├── outputs: dist/**, tsconfig.build.tsbuildinfo
└── dependsOn: ^build (dependencies first)

ts → tsc --build tsconfig.json
├── Type checking without emission
└── Faster feedback loop
```

**Special case:** `eslint-config` tests depend on both `^build` and `build` because tests validate the built configuration.

### Testing Architecture

- **Test runner:** Vitest (no Jest)
- **Component testing:** React Testing Library
- **Config validation:** Snapshot testing (eslint-config)
- **Coverage:** v8 provider with html, cobertura, lcovonly, text reports
- **Test files:** `*.test.ts`, `*.spec.ts`, `*.tests.ts` in `/tests` directories

### Shared Patterns

**Package script standards:**
All packages follow identical script naming:

- `build` - Build the package
- `cleanup` - Remove build artifacts
- `fix` - Run all fixes (ts + format:fix + lint:fix)
- `format` / `format:fix` - Check/fix formatting
- `lint` / `lint:fix` - Check/fix linting
- `qa` - Run all quality checks
- `ts` - Type check

**Configuration export pattern:**
Config packages export default objects or functions that can be imported and re-exported:

```javascript
// Root prettier.config.js
export { config as default } from '@apitree.cz/prettier-config';
```

**ESLint flat config:**
Uses modern flat config (not eslintrc):

- Composable config arrays
- File-specific rule overrides
- Type-safe with typescript-eslint projectService

## Contribution Workflow

1. **Create feature branch** from `main`

   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes** following conventional commits:

   ```
   <type>(<scope>): <message>
   ```

   Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`

3. **Add changeset** for version management:

   ```bash
   pnpm changeset
   ```

4. **Run quality checks** before committing:

   ```bash
   pnpm run qa
   ```

5. **Commit** - Husky hooks will run lint-staged and commitlint

6. **Open Pull Request** with clear description

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
