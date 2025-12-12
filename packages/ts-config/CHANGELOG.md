# @apitree.cz/ts-config

## 0.4.10

### Patch Changes

- 90699c2: Update documentation to reflect simplified TypeScript configuration pattern

  Updated README to document the new two-config pattern (tsconfig.json + tsconfig.build.json) instead of the previous three-config pattern. The library configuration is now directly in tsconfig.json rather than in a separate tsconfig.lib.json file.

## 0.4.9

### Patch Changes

- 06af938: Bump deps to latest compat

## 0.4.8

### Patch Changes

- d3e5e31: Simplify default configs

## 0.4.7

### Patch Changes

- e8fb7ba: Improves docs on monorepo internal libs

## 0.4.6

### Patch Changes

- 3f508b5: Upgrade dependencies to latest versions.

## 0.4.5

### Patch Changes

- afc1fba: Update dependencies to latest versions. Include critical security fixes.

## 0.4.4

### Patch Changes

- 70fd0fa: Add link to npm package page.

## 0.4.3

### Patch Changes

- 3fa15b2: Bump pnpm and node.js

## 0.4.2

### Patch Changes

- 67f8f37: Bump package.

## 0.4.1

### Patch Changes

- fb2c1ca: Add package keywords.

## 0.4.0

### Minor Changes

- b14adad: Bump packages

## 0.3.0

### Minor Changes

- 5c46be6: BREAKING: Drop CJS support completely.

  Added `node` config for Node.js services and apps.

### Patch Changes

- 5c46be6: Upgrade dependencies to latest version.

## 0.2.4

### Patch Changes

- 98ca41b: Extend `app.json` with preferred React apps compiler options.
- 98ca41b: Upgrade all dependencies to latest compatible.

## 0.2.3

### Patch Changes

- b8f1877: Update all dependencies to latest compatible versions.

## 0.2.2

### Patch Changes

- 5c63e98: Disable `noUnusedLocals` compiler option as this is checked by `eslint`.

## 0.2.1

### Patch Changes

- 78cdd8f: Update TypeScript to `v5.5`.

## 0.2.0

### Minor Changes

- f5d8724: Update `compilerOptions.target` to `es2017` in `nextjs.json` (default in [create-next-app](https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/ts/tsconfig.json#L3)).

## 0.1.7

### Patch Changes

- 0ee2f9c: Update dependencies to their latest supported versions.

## 0.1.6

### Patch Changes

- d9aa0db: Keep comments in library build output as they mostly work as documentation.

## 0.1.5

### Patch Changes

- d2ef64a: Use `nodenext` as module.

## 0.1.4

### Patch Changes

- d0eccb4: Add missing exports entries for CJS and Nest libraries.

## 0.1.3

### Patch Changes

- b864f3d: Add missing files to be exposed from the package.

## 0.1.2

### Patch Changes

- eacf5be: Add CJS-compatible configs.

## 0.1.1

### Patch Changes

- 4ca0e1b: Enable `checkJs` for Next.js to have `next.config.cjs` type-checked by default.
- 74ebf71: Upgrade all dependencies to their latest versions.
- 86a2c7b: Add configuration for Nest.js

## 0.1.0

### Minor Changes

- 624dac3: 🎉 First release
