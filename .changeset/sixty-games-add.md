---
'@apitree.cz/eslint-config': patch
---

Rules updates:

- disallow nested ternary expressions completely
- allow `null` values for Nest.js apps as backend often needs `null` for DB queries and DTOs
- put callbacks at the end of JSX element props
