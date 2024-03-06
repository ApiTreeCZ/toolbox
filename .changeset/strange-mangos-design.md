---
"@apitree.cz/prettier-config": minor
"@apitree.cz/eslint-config": minor
---

BREAKING: Adds @trivago/prettier-plugin-sort-imports which autosorts imports on Prettier format. This makes Eslint import/order redundant so it's removed.

This change may result in Prettier changing the import order in your projects as the configuration for Eslint import/order differs slightly from what prettier enforces.
