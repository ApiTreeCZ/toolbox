---
'@apitree.cz/testing-library': minor
---

Remove dependency on `@testing-library/user-event`. Our package should not enforce any specific version for `user-event`, it creates unnecessary complexity in the dependency tree.
