# @apitree.cz/prettier-config

## 0.2.0

### Minor Changes

- cca0e03: BREAKING: Adds @trivago/prettier-plugin-sort-imports which autosorts imports on Prettier format. This makes Eslint import/order redundant so it's removed.

  This change may result in Prettier changing the import order in your projects as the configuration for Eslint import/order differs slightly from what prettier enforces.

## 0.1.3

### Patch Changes

- c31b74b: Enforce max line length of 120 characters.

## 0.1.2

### Patch Changes

- 503ca4f: Explicitly disallow trailing commas in JSON files for compatibilty reasons.
- 2f25e1c: Update dependencies to latest versions.

## 0.1.1

### Patch Changes

- 74ebf71: Upgrade all dependencies to their latest versions.

## 0.1.0

### Minor Changes

- 624dac3: 🎉 First release
