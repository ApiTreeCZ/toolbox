<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# CLI

### Command line interface for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/cli
```

## Usage

```
pnpm apitree --help
```

### Commands

- [`sync-project-references`](#sync-project-references)

#### `sync-project-references`

Synchronize monorepo project references in TS config files (multi-target builds supported).

```bash
pnpm apitree sync-project-references --help
```

##### Configuration

You can configure the command with an optional config file (`sync-project-references.config.js` by default,
pass `--config` option with custom path).

```js
/** @type {import('@apitree/cli').SyncProjectReferencesConfig} */
const config = {
  // ... config options
};

export default config;
```

See [config reference](./docs/interfaces/SyncProjectReferencesConfig.md) for more details.
