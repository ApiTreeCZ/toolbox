---
'@apitree.cz/lint-staged-config': major
---

Remove `library` export

The `library` export has been removed as it is now identical to the `workspace` export. Use `workspace` instead for all workspace configurations.

**Breaking change:**

```diff
- export { library as default } from '@apitree.cz/lint-staged-config';
+ export { workspace as default } from '@apitree.cz/lint-staged-config';
```
