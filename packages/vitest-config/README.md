<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# Vitest Config

### [Vitest](https://vitest.dev) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/vitest-config vitest
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

### Nest.js

⚠️ _Nest.js projects are CJS by default. This configuration needs to be placed in `vitest.config.mjs` to interpret it as
ESM._

```typescript
export { nestjs as default } from '@apitree.cz/vitest-config';
```

### Customization

You can customize the configuration with `mergeConfig` function:

```typescript
import { base } from '@apitree.cz/vitest-config';
import { mergeConfig } from 'vitest/config';
import type { UserConfig } from 'vitest/config';

export default mergeConfig(config, {
  // project specific configuration
} satisfies UserConfig);
```

> See [Options](https://vitest.dev/config/#options) documentation for config reference.
