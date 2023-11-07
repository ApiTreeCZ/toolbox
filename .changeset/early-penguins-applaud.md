---
'@apitree.cz/vitest-config': minor
---

Require `@vitest/coverage-istanbul` as peer dependency to make sure the module is always installed with the package
requiring our Vitest config. This is needed for correct resolution of the coverage provider within `node_modules`
structure (especially in `pnpm` workspaces).
