<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree.png" width="201" />
</a>

# Vitest Config

### [Vitest](https://vitest.dev) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/vitest-config @vitest/coverage-v8 vitest
```

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

> ⚠️ Nest.js projects are CJS by default. This configuration needs to be placed in `vitest.config.mjs` to interpret it
> as ESM. If your project, however, is ESM, you can place the configuration in `vitest.config.ts` as usual.

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
