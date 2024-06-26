# @apitree.cz/vitest-config

## 0.3.2

### Patch Changes

- 78cdd8f: Update TypeScript to `v5.5`.

## 0.3.1

### Patch Changes

- d46f8fd: Upgrade all dependencies to their latest compatible versions.

## 0.3.0

### Minor Changes

- 0c4450c: Migrate coverage provider from `istanbul` to `v8`.

### Patch Changes

- 0c4450c: Bump dependencies to latest versions.

## 0.2.2

### Patch Changes

- 0ee2f9c: Update dependencies to their latest supported versions.

## 0.2.1

### Patch Changes

- 2f25e1c: Update dependencies to latest versions.

## 0.2.0

### Minor Changes

- 5c257f9: BREAKING: Restructure package exports for simpler usage.

  Add `nestjs` configuration with CJS compatible build as Nest.js does not support ESM yet.

- 3b6dd27: Require `@vitest/coverage-istanbul` as peer dependency to make sure the module is always installed with the package
  requiring our Vitest config. This is needed for correct resolution of the coverage provider within `node_modules`
  structure (especially in `pnpm` workspaces).

### Patch Changes

- 01c62f0: Enable cobertura and lcov coverage reports.
- 74ebf71: Upgrade all dependencies to their latest versions.

## 0.1.0

### Minor Changes

- 624dac3: 🎉 First release
