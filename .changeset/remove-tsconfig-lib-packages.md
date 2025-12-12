---
'@apitree.cz/eslint-config': patch
'@apitree.cz/prettier-config': patch
'@apitree.cz/testing-library': patch
'@apitree.cz/ts-utils': patch
'@apitree.cz/typedoc-config': patch
'@apitree.cz/vitest-config': patch
---

Simplify TypeScript configuration structure

Removed `tsconfig.lib.json` files and consolidated configuration into `tsconfig.json`. The new pattern uses only two config files per package:

- `tsconfig.json` - Main configuration for type checking (extends from @apitree.cz/ts-config/library)
- `tsconfig.build.json` - Build configuration (inherits from tsconfig.json)

Updated package.json scripts to reference `tsconfig.json` instead of `tsconfig.lib.json` for type checking and documentation generation. This is an internal change and does not affect package consumers.
