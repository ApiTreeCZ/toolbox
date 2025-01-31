<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# CLI

![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Fcli)

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

Synchronize monorepo project references in TS config files.

```bash
pnpm apitree sync-project-references --help
```

##### Configuration

You can configure the command with an optional config file (`sync-project-references.config.js` by default,
use `--config` to customize).

```js
/** @type {import('@apitree/cli').SyncProjectReferencesConfig} */
const config = {
  // ... config options
};

export default config;
```

See [config reference](./docs/interfaces/SyncProjectReferencesConfig.md) for more details.
