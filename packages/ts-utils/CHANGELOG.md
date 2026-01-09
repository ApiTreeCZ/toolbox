# @apitree.cz/ts-utils

## 0.2.5

### Patch Changes

- 8fbb050: Bump deps to latest compatible versions

## 0.2.4

### Patch Changes

- 90699c2: Simplify TypeScript configuration structure

  Removed `tsconfig.lib.json` files and consolidated configuration into `tsconfig.json`. The new pattern uses only two config files per package:
  - `tsconfig.json` - Main configuration for type checking (extends from @apitree.cz/ts-config/library)
  - `tsconfig.build.json` - Build configuration (inherits from tsconfig.json)

  Updated package.json scripts to reference `tsconfig.json` instead of `tsconfig.lib.json` for type checking and documentation generation. This is an internal change and does not affect package consumers.

## 0.2.3

### Patch Changes

- 70fd0fa: Add link to npm package page.

## 0.2.2

### Patch Changes

- 3fa15b2: Bump pnpm and node.js

## 0.2.1

### Patch Changes

- fb2c1ca: Add package keywords.

## 0.2.0

### Minor Changes

- b14adad: Bump packages

## 0.1.6

### Patch Changes

- e3bc9c4: Add `src` to npm package for sourcemaps resolutions.

## 0.1.5

### Patch Changes

- 5c46be6: Upgrade dependencies to latest version.

## 0.1.4

### Patch Changes

- 98ca41b: Upgrade all dependencies to latest compatible.

## 0.1.3

### Patch Changes

- b8f1877: Update all dependencies to latest compatible versions.

## 0.1.2

### Patch Changes

- 78cdd8f: Update TypeScript to `v5.5`.

## 0.1.1

### Patch Changes

- 0ee2f9c: Update dependencies to their latest supported versions.

## 0.1.0

### Minor Changes

- 4afb532: Add package with shared TS utility functions.
