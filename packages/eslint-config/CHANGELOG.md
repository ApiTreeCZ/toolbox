# @apitree.cz/eslint-config

## 0.7.8

### Patch Changes

- da56c03: Update ESLint and plugin dependencies
- 8fbb050: Bump deps to latest compatible versions

## 0.7.7

### Patch Changes

- 93aa1fc: docs: update README files with improved documentation
- 93aa1fc: feat: implement Vitest monorepo setup with project-based configuration
  - Added root vitest.config.ts with Vitest Projects support
  - Converted package-level vitest.config.ts to vitest.config.js using defineProject
  - Updated ESLint config to recognize vitest.config.js (previously .ts)
  - Moved vitest dependencies to root (vitest, @vitest/coverage-v8, @vitest/ui)
  - Made @vitest/coverage-v8 an optional peer dependency in vitest-config
  - Removed internal test suite from eslint-config package
  - Updated root lint and format scripts to include .ts files
  - Added test:ui script for interactive Vitest UI

## 0.7.6

### Patch Changes

- 90699c2: Simplify TypeScript configuration structure

  Removed `tsconfig.lib.json` files and consolidated configuration into `tsconfig.json`. The new pattern uses only two config files per package:
  - `tsconfig.json` - Main configuration for type checking (extends from @apitree.cz/ts-config/library)
  - `tsconfig.build.json` - Build configuration (inherits from tsconfig.json)

  Updated package.json scripts to reference `tsconfig.json` instead of `tsconfig.lib.json` for type checking and documentation generation. This is an internal change and does not affect package consumers.

## 0.7.5

### Patch Changes

- 06af938: Bump deps to latest compat

## 0.7.4

### Patch Changes

- dfe2ab7: Updated dependency `@eslint/core` to `^1.0.0`.

## 0.7.3

### Patch Changes

- a13208b: Extend extraneous deps pattern

## 0.7.2

### Patch Changes

- a756ef1: Bump deps

## 0.7.1

### Patch Changes

- a1854ea: Upgrade `eslint` to `9.39.1`

## 0.7.0

### Minor Changes

- 066f863: Migrate to `storybook@^10`

## 0.6.13

### Patch Changes

- 9cfe9a3: Upgrade dependencies to latest compatible version

## 0.6.12

### Patch Changes

- bd8e9c4: Updated dependency `eslint-plugin-react-hooks` to `^7.0.0`.

## 0.6.11

### Patch Changes

- 3f508b5: Upgrade dependencies to latest versions.
- 68f878e: Updated dependency `eslint-plugin-react-hooks` to `^6.0.0`.

## 0.6.10

### Patch Changes

- 5cf53c7: Upgrade dependencies to latest versions

## 0.6.9

### Patch Changes

- 55270e5: Upgrade dependencies to latest versions.

## 0.6.8

### Patch Changes

- c969ba1: Update dependencies to latest compatible versions.

## 0.6.7

### Patch Changes

- 07e25fa: Extend list of allowed abbreviations for convenience.

## 0.6.6

### Patch Changes

- 6dcc467: Bump deps to latest.

## 0.6.5

### Patch Changes

- 9080138: Forbid circular dependencies between modules.

## 0.6.4

### Patch Changes

- ad6e963: Allow explicit return arrow functions in object shorthands.

## 0.6.3

### Patch Changes

- 5f1d388: Enforce Rules of Hooks (closes [#70](https://github.com/ApiTreeCZ/toolbox/issues/70)).
- ad74157: Enforce `kebab-case` for filenames (closes [#69](https://github.com/ApiTreeCZ/toolbox/issues/69)).

## 0.6.2

### Patch Changes

- bf64f67: Update dependencies to latest patch.
- bf64f67: Add `react/self-closing-comp`. Migrate `storybook` to `v9`.

## 0.6.1

### Patch Changes

- 905769a: Bump dependencies to latest versions.

## 0.6.0

### Minor Changes

- a5f20fc: BREAKING:
  - enforce object shorthand syntax everywhere
  - prefer array and object destructuring (except for references)
  - require destructuring assignment in React component props

## 0.5.9

### Patch Changes

- 06693e7: Update all dependencies to their latest version.

## 0.5.8

### Patch Changes

- 9aa1dda: Add `util` to allowed abbreviations

## 0.5.7

### Patch Changes

- afc1fba: Update dependencies to latest versions. Include critical security fixes.

## 0.5.6

### Patch Changes

- 70fd0fa: Add link to npm package page.

## 0.5.5

### Patch Changes

- c8e3ea8: Update recommended `Run for files` pattern.

## 0.5.4

### Patch Changes

- 3fa15b2: Bump pnpm and node.js

## 0.5.3

### Patch Changes

- fb2c1ca: Add package keywords.
- fb2c1ca: Add `monorepo` rule set allowing extraneous imports in `lint-staged.config.js` and `typedoc.config.js`.

## 0.5.2

### Patch Changes

- 330e3a0: Remove `eslint-plugin-prettier` in favor of `prettier` directly (only `eslint-config-prettier` overrides are applied).

## 0.5.1

### Patch Changes

- d6d2ea4: Allow abbreviations in `.d.ts` files (often auto-generated).

## 0.5.0

### Minor Changes

- b14adad: Bump packages

## 0.4.2

### Patch Changes

- 60edd6c: Exclude `src` from npm package.

## 0.4.1

### Patch Changes

- e3bc9c4: Add `src` to npm package for sourcemaps resolutions.

## 0.4.0

### Minor Changes

- 5c46be6: BREAKING:
  - migrate to `eslint@9` and flat config
  - migrate to `react@19`
  - drop CJS support completely

  This package is now pure ESM.-

### Patch Changes

- 5c46be6: Upgrade dependencies to latest version.

## 0.3.6

### Patch Changes

- 98ca41b: Upgrade all dependencies to latest compatible.

## 0.3.5

### Patch Changes

- b8f1877: Update all dependencies to latest compatible versions.

## 0.3.4

### Patch Changes

- 3d1c365: Allow `async` Next.js Server Actions without `await`.
- 9840d3d: Extend allowed dev dependencies pattern for `import/no-extraneous-dependencies` rule.
- 3e58360: Include `typescript` base rules in strict overrides.
- ea23f9a: Add `storybook` config designed for Storybook app configuration.

## 0.3.3

### Patch Changes

- 78cdd8f: Update TypeScript to `v5.5`.

## 0.3.2

### Patch Changes

- a275aad: Extend rules for Next.js App Router.

## 0.3.1

### Patch Changes

- d46f8fd: Upgrade all dependencies to their latest compatible versions.

## 0.3.0

### Minor Changes

- 6642489: Switch `react-hooks/exhaustive-deps` rule from warning to error.

## 0.2.4

### Patch Changes

- 65534a6: Extend extraneous dependencies glob patterns to match all nested paths.

## 0.2.3

### Patch Changes

- 0c4450c: Bump dependencies to latest versions.

## 0.2.2

### Patch Changes

- 0ee2f9c: Update dependencies to their latest supported versions.

## 0.2.1

### Patch Changes

- f8b25fe: Revert added `@trivago/prettier-plugin-sort-imports` as it conflicts with `eslint-config-prettier` with no valuable error messages to debug.

## 0.2.0

### Minor Changes

- cca0e03: BREAKING: Adds @trivago/prettier-plugin-sort-imports which autosorts imports on Prettier format. This makes Eslint import/order redundant so it's removed.

  This change may result in Prettier changing the import order in your projects as the configuration for Eslint import/order differs slightly from what prettier enforces.

### Patch Changes

- bc9afcb: Allow nested JSX components as props (preferably memoized).

## 0.1.10

### Patch Changes

- f2cafa5: Allow extraneous dependencies in mock files.
- fbbf57c: Only allow `require()` in CJS files. Allow inconsistent type imports in `.d.ts` files.

## 0.1.9

### Patch Changes

- c31b74b: Enforce max line length of 120 characters.

## 0.1.8

### Patch Changes

- 5f9dd78: Extend base test rules in React test and stories rules.

## 0.1.7

### Patch Changes

- aa757a5: Allow literal strings in test and stories JSX.
- 2f25e1c: Update dependencies to latest versions.

## 0.1.6

### Patch Changes

- 087a0c0: Add rules for FormatJS and `react-intl`.

## 0.1.5

### Patch Changes

- 365dcab: Require curly braces around all blocks.

## 0.1.4

### Patch Changes

- b864f3d: Add missing files to be exposed from the package.

## 0.1.3

### Patch Changes

- eacf5be: Add CJS-compatible configs.
- 0edd953: Disable `@typescript-eslint/consistent-type-imports` for Nest.js. This is because many classes in Nest.js are both types
  and values needed at runtime for evaluation.

## 0.1.2

### Patch Changes

- e467a6f: Require JSX keys in interators and map calls.

## 0.1.1

### Patch Changes

- 74ebf71: Add `.mdx` files rules.
- dcad4a0: Disable `no-magic-numbers` in JSX styles (e.g. for spacing values).
- ef8f4e7: Add `10`, `100`, `1000` and `10_000` to list of allowed magic numbers as they are used frequently.
- 97c8608: Allow `devDependencies` in `*.config.cjs` and `*.config.mjs` files.
- 5c257f9: Disable `import/no-cycle` for `models` in Nest.js projects as they might reference one another.
- 74ebf71: Upgrade all dependencies to their latest versions.
- 455cfcd: Move `vitest` to direct dependencies as `eslint-plugin-vitest` needs it.
- 7a585e4: Changed rules:
  - allow `null` values in our codebase
  - allow abbreviations in tests
  - extend allowed magic numbers with `-1`
  - allow maximum of 3 classes per one file

- 86a2c7b: Add configuration for Nest.js
- 32797f4: Allow `2` in list of magic numbers.
- e523288: Extend React style files pattern with `styles` directories to apply `no-magic-numbers` override there.
- 2fde165: Rules updates:
  - disallow nested ternary expressions completely
  - allow `null` values for Nest.js apps as backend often needs `null` for DB queries and DTOs
  - put callbacks at the end of JSX element props

## 0.1.0

### Minor Changes

- 624dac3: 🎉 First release
