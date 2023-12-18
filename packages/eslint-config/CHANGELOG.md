# @apitree.cz/eslint-config

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
