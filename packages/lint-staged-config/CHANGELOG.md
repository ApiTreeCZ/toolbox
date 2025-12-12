# @apitree.cz/lint-staged-config

## 1.0.0

### Major Changes

- 90699c2: Remove `library` export

  The `library` export has been removed as it is now identical to the `workspace` export. Use `workspace` instead for all workspace configurations.

  **Breaking change:**

  ```diff
  - export { library as default } from '@apitree.cz/lint-staged-config';
  + export { workspace as default } from '@apitree.cz/lint-staged-config';
  ```

## 0.2.7

### Patch Changes

- 06af938: Bump deps to latest compat

## 0.2.6

### Patch Changes

- e9c8e28: Lint and format JS, JSON and MD files in `.github` dir.
- e9c8e28: Extend special dirs with `.claude`

## 0.2.5

### Patch Changes

- 0c936d1: Extend root patterns to check

## 0.2.4

### Patch Changes

- e8fb7ba: Improves docs on monorepo internal libs

## 0.2.3

### Patch Changes

- 3f508b5: Introduce `library` config for workspaces with distributable packages.
- 3f508b5: Upgrade dependencies to latest versions.

## 0.2.2

### Patch Changes

- c969ba1: Update dependencies to latest compatible versions.

## 0.2.1

### Patch Changes

- 6dcc467: Bump deps to latest.

## 0.2.0

### Minor Changes

- 905769a: Migrate to `lint-staged@16`.

## 0.1.4

### Patch Changes

- 06693e7: Update all dependencies to their latest version.

## 0.1.3

### Patch Changes

- afc1fba: Update dependencies to latest versions. Include critical security fixes.

## 0.1.2

### Patch Changes

- 70fd0fa: Add link to npm package page.

## 0.1.1

### Patch Changes

- 3fa15b2: Bump pnpm and node.js

## 0.1.0

### Minor Changes

- fb2c1ca: Introduce shared configurations for `lint-staged`:
  - `root` – configuration for monorepo root
  - `workspace` – configuration for monorepo workspace
  - `singlePackage` – configuration for single package repository

### Patch Changes

- fb2c1ca: Add package keywords.
