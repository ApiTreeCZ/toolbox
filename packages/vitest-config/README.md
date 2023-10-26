<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# Vitest Config

### [Vitest](https://vitest.dev) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree/vitest-config vite vitest
```

## Usage

Use one of the following configurations in your `vitest.config.ts`:

### Base

```typescript
export { config as default } from '@apitree/vitest-config';
```

### React

```typescript
export { config as default } from '@apitree/vitest-config/react';
```

### Customization

You can customize the configuration with `mergeConfig` function:

```typescript
import { config } from '@apitree/vitest-config';
import { mergeConfig } from 'vitest/config';

export default mergeConfig(config, {
  // project specific configuration
});
```

> See [Options](https://vitest.dev/config/#options) documentation for config reference.
