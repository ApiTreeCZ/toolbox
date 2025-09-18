# @apitree.cz/vitest-config

## 0.7.9

### Patch Changes

- 55270e5: Upgrade dependencies to latest versions.

## 0.7.8

### Patch Changes

- c969ba1: Update dependencies to latest compatible versions.

## 0.7.7

### Patch Changes

- 6dcc467: Bump deps to latest.

## 0.7.6

### Patch Changes

- bf64f67: Update dependencies to latest patch.

## 0.7.5

### Patch Changes

- 06693e7: Update all dependencies to their latest version.

## 0.7.4

### Patch Changes

- afc1fba: Update dependencies to latest versions. Include critical security fixes.

## 0.7.3

### Patch Changes

- 70fd0fa: Add link to npm package page.

## 0.7.2

### Patch Changes

- 3fa15b2: Bump pnpm and node.js

## 0.7.1

### Patch Changes

- fb2c1ca: Add package keywords.

## 0.7.0

### Minor Changes

- b14adad: Bump packages

## 0.6.2

### Patch Changes

- 946d443: Avoid tests output noise and only log Vite build errors that are fatal.

## 0.6.1

### Patch Changes

- 60edd6c: Exclude `src` from npm package.

## 0.6.0

### Minor Changes

- c487799: Simplify peer deps with `pnpm` setup.

### Patch Changes

- e3bc9c4: Add `src` to npm package for sourcemaps resolutions.

## 0.5.0

### Minor Changes

- 5c46be6: BREAKING: Migrate to `vitest@3`.

### Patch Changes

- 5c46be6: Upgrade dependencies to latest version.

## 0.4.2

### Patch Changes

- f1ddfa4: Add missing `jsdom` peer dep.

## 0.4.1

### Patch Changes

- 98ca41b: Upgrade all dependencies to latest compatible.

## 0.4.0

### Minor Changes

- b8f1877: Migrate to Vitest `v2`.

### Patch Changes

- b8f1877: Update all dependencies to latest compatible versions.

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
