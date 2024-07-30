# @apitree.cz/eslint-config

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
