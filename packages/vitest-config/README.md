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

If you want to collect code coverage, you also need to install `v8` provider:

```bash
pnpm add --save-dev @vitest/coverage-v8
```

### Monorepos

Install the package in the root only, use it in multiple workspaces (see [Vitest Projects](#vitest-projects)).

## Usage

Use one of the following configurations in your `vitest.config.ts`.

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

### Vitest Projects

You can also use the configurations as a base for multiple [Vitest Projects](https://vitest.dev/guide/projects.html) in a monorepo setup.

Start by defining root `vitest.config.ts`:

```typescript
import { defineConfig, mergeConfig } from 'vitest/config';

export default defineConfig({
  test: {
    root: import.meta.dirname,
    projects: ['apps*/', 'packages/*'],
  },
});
```

Then, in each project, create `vitest.config.js` defining specific preset (e.g. `apps/react-app/vitest.config.js` for an app that requires React preset):

```javascript
import { react } from '@apitree.cz/vitest-config';
import { defineProject } from 'vitest/config';

export default defineProject(react);
```

Assuming the app is named `@apitree.cz/react-app`, you can run Vitest for this project only:

```bash
# From monorepo root
pnpm vitest --project @apitree.cz/react-app --run

# From apps/react-app
pnpm vitest --run
```
