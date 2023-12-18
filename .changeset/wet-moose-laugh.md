---
'@apitree.cz/eslint-config': patch
---

Disable `@typescript-eslint/consistent-type-imports` for Nest.js. This is because many classes in Nest.js are both types
and values needed at runtime for evaluation.
