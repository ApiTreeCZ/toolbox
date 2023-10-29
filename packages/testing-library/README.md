<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# Testing Library

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) setup for [Vitest](https://vitest.dev) in ApiTree projects.

</div>

## Installation

```bash
pnpm add --save-dev @apitree/testing-library @apitree/vitest-config vitest
```

## Usage

1. Create `vitest.config.ts` in your project root:

   ```typescript
   export { config as default } from '@apitree/vitest-config/react';
   ```

2. Create `tests/setup.ts`:

   ```typescript
   import '@apitree/testing-library/setup';
   ```

3. Create test renderers in `tests/testing-library.ts`

   ```typescript jsx
   import { createRenderers } from '@apitree/testing-library';
   export * from '@apitree/testing-library';
   export const { render, renderHook } = createRenderers();
   ```

   > See [`CreateRenderersProps`](./src/testing-library.ts) for `createRenderers` props reference.

4. Write your tests in `tests` directory and run them with `vitest --run` command.

   > Use `tests/testing-library.ts` for importing Testing Library utilities.
