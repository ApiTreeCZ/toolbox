# @apitree.cz/typedoc-config

## 0.2.12

### Patch Changes

- 08d18a0: Ensure MD plugin is correctly resolved in monorepos
- 8fbb050: Bump deps to latest compatible versions

## 0.2.11

### Patch Changes

- 90699c2: Simplify TypeScript configuration structure

  Removed `tsconfig.lib.json` files and consolidated configuration into `tsconfig.json`. The new pattern uses only two config files per package:
  - `tsconfig.json` - Main configuration for type checking (extends from @apitree.cz/ts-config/library)
  - `tsconfig.build.json` - Build configuration (inherits from tsconfig.json)

  Updated package.json scripts to reference `tsconfig.json` instead of `tsconfig.lib.json` for type checking and documentation generation. This is an internal change and does not affect package consumers.

## 0.2.10

### Patch Changes

- 06af938: Bump deps to latest compat

## 0.2.9

### Patch Changes

- c969ba1: Update dependencies to latest compatible versions.

## 0.2.8

### Patch Changes

- 6dcc467: Bump deps to latest.

## 0.2.7

### Patch Changes

- bf64f67: Update dependencies to latest patch.

## 0.2.6

### Patch Changes

- 905769a: Bump dependencies to latest versions.

## 0.2.5

### Patch Changes

- 06693e7: Update all dependencies to their latest version.

## 0.2.4

### Patch Changes

- afc1fba: Update dependencies to latest versions. Include critical security fixes.

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

## 0.1.9

### Patch Changes

- 60edd6c: Exclude `src` from npm package.

## 0.1.8

### Patch Changes

- e3bc9c4: Add `src` to npm package for sourcemaps resolutions.

## 0.1.7

### Patch Changes

- 5c46be6: Upgrade dependencies to latest version.

## 0.1.6

### Patch Changes

- 98ca41b: Upgrade all dependencies to latest compatible.

## 0.1.5

### Patch Changes

- b8f1877: Update all dependencies to latest compatible versions.

## 0.1.4

### Patch Changes

- 78cdd8f: Update TypeScript to `v5.5`.

## 0.1.3

### Patch Changes

- d46f8fd: Upgrade all dependencies to their latest compatible versions.

## 0.1.2

### Patch Changes

- 0ee2f9c: Update dependencies to their latest supported versions.

## 0.1.1

### Patch Changes

- 74ebf71: Upgrade all dependencies to their latest versions.

## 0.1.0

### Minor Changes

- 624dac3: 🎉 First release
