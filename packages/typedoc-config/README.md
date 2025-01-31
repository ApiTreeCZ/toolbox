<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# TypeDoc Config

### [TypeDoc](https://typedoc.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/typedoc-config typedoc typescript
```

## Usage

Add the following configuration to your `typedoc.config.js`:

```javascript
export { config as default } from '@apitree.cz/typedoc-config';
```

In a monorepo, keep everything installed in the root only and create a config for each workspace you want to have
documented.

### Custom Entry Points

The default configuration picks `./src/index.ts` in your package as the documentation entry point, however, you can
change this by overriding the `entryPoints` property in your `typedoc.config.js`:

```javascript
import { config } from '@apitree.cz/typedoc-config';

export default {
  ...config,
  entryPoints: ['./src/module-a/index.ts', './src/module-b/index.ts'],
};
```

> See [Options](https://typedoc.org/options/) documentation for config reference.
