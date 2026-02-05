# @apitree.cz/vitest-config

## 0.8.7

### Patch Changes

- 7936531: Update dependencies: commander 14.0.3, @commitlint/\* 20.4.1, turbo 2.8.3, typescript-eslint 8.54.0, @next/eslint-plugin-next 16.1.6, eslint-plugin-storybook 10.2.6, jsdom 28.0.0, react 19.2.4, and other minor updates

## 0.8.6

### Patch Changes

- da56c03: Update Vitest and SWC dependencies
- 8fbb050: Bump deps to latest compatible versions

## 0.8.5

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

## 0.8.4

### Patch Changes

- 90699c2: Simplify TypeScript configuration structure

  Removed `tsconfig.lib.json` files and consolidated configuration into `tsconfig.json`. The new pattern uses only two config files per package:
  - `tsconfig.json` - Main configuration for type checking (extends from @apitree.cz/ts-config/library)
  - `tsconfig.build.json` - Build configuration (inherits from tsconfig.json)

  Updated package.json scripts to reference `tsconfig.json` instead of `tsconfig.lib.json` for type checking and documentation generation. This is an internal change and does not affect package consumers.

## 0.8.3

### Patch Changes

- 06af938: Bump deps to latest compat

## 0.8.2

### Patch Changes

- a756ef1: Bump deps

## 0.8.1

### Patch Changes

- 74c29f7: Upgrade `@swc/core` to `1.15.0`

## 0.8.0

### Minor Changes

- 066f863: Require `vitest@^4` and `jsdom@^27`

## 0.7.12

### Patch Changes

- 9cfe9a3: Upgrade dependencies to latest compatible version

## 0.7.11

### Patch Changes

- 3f508b5: Upgrade dependencies to latest versions.

## 0.7.10

### Patch Changes

- 5cf53c7: Upgrade dependencies to latest versions

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
