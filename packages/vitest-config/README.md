<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# Vitest Config

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Fvitest-config)](https://www.npmjs.com/package/@apitree.cz/vitest-config)

### [Vitest](https://vitest.dev) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/vitest-config vitest
```

### PNPM Monorepos

Prior to the installation, add the following to your repository root `pnpm-workspace.yaml`:

```yaml
publicHoistPattern:
  - '*vitest*'
```

Install and use the package in each workspace.

## Usage

Use one of the following configurations in your `vitest.config.ts`:

### Base

```typescript
export { base as default } from '@apitree.cz/vitest-config';
```

### React

```typescript
export { react as default } from '@apitree.cz/vitest-config';
```

> ⚠️ You will also need to install `jsdom` for React configuration to work.

### Nest.js

```typescript
export { nestjs as default } from '@apitree.cz/vitest-config';
```

### Customization

You can customize the configuration with `mergeConfig` function:

```typescript
import { base } from '@apitree.cz/vitest-config';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  base,
  defineConfig({
    // project specific config
  }),
);
```

> See [Options](https://vitest.dev/config/#options) documentation for config reference.
