<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# ESLint Config Next.js

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Feslint-config-nextjs)](https://www.npmjs.com/package/@apitree.cz/eslint-config-nextjs)

### [ESLint](https://eslint.org) configuration for Next.js projects in ApiTree

</div>

## Installation

This package **must** be used in conjunction with the base `@apitree.cz/eslint-config` and `@apitree.cz/eslint-config-react` packages. Make sure all are installed:

```bash
pnpm add --save-dev @apitree.cz/eslint-config @apitree.cz/eslint-config-react @apitree.cz/eslint-config-nextjs eslint
```

### Monorepos

Install and use the package in the root only.

## Usage

Define `base`, `react`, and `nextjs` configurations in your repository's root `eslint.config.js` file:

```javascript
import { defineConfig } from 'eslint/config';
import { base } from '@apitree.cz/eslint-config';
import { react } from '@apitree.cz/eslint-config-react';
import { nextjs } from '@apitree.cz/eslint-config-nextjs';

export default defineConfig(base, react, nextjs(['apps/<nextjs-app>']));
```

> Omit the `apps` array argument if you have a single Next.js app repository (no monorepo).

## Editor / IDE Setup

For the recommended IDE setup (e.g., IntelliJ), please refer to the setup guide in the [base package README](file:///Users/vitrozsival/projects/apitree/toolbox/packages/eslint-config/README.md#intellij-ide-setup).
