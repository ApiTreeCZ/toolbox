<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# Testing Library

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Ftesting-library)](https://www.npmjs.com/package/@apitree.cz/testing-library)

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) setup for [Vitest](https://vitest.dev) in ApiTree projects.

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/testing-library @testing-library/react vitest
```

In a monorepo, install and use the package in each workspace.

## Usage

1. Setup [Vitest for React](../vitest-config/README.md#react) with `@apitree.cz/vitest-config`.

2. Create `tests/setup.ts`:

   ```typescript
   import '@apitree.cz/testing-library/setup';
   ```

3. Create test renderers in `tests/testing-library.ts`

   ```typescript jsx
   import { createRenderers } from '@apitree.cz/testing-library';

   export * from '@apitree.cz/testing-library';
   export * from '@testing-library/react';
   export const { render, renderHook } = createRenderers();
   ```

   > See [`CreateRenderersProps`](./src/testing-library.ts) for `createRenderers` props reference.

4. Write your tests in `tests` directory and run them with `vitest --run` command.

   > Use `tests/testing-library.ts` for importing Testing Library utilities.
