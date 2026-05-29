<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# ESLint Config Storybook

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Feslint-config-storybook)](https://www.npmjs.com/package/@apitree.cz/eslint-config-storybook)

### [ESLint](https://eslint.org) configuration for Storybook projects in ApiTree

</div>

## Installation

This package **must** be used in conjunction with the base `@apitree.cz/eslint-config` and `@apitree.cz/eslint-config-react` packages. Make sure all are installed:

```bash
pnpm add --save-dev @apitree.cz/eslint-config @apitree.cz/eslint-config-react @apitree.cz/eslint-config-storybook eslint
```

### Monorepos

Install and use the package in the root only.

## Usage

Define `base`, `react`, and `storybook` configurations in your repository's root `eslint.config.js` file:

```javascript
import { defineConfig } from 'eslint/config';
import { base } from '@apitree.cz/eslint-config';
import { react } from '@apitree.cz/eslint-config-react';
import { storybook } from '@apitree.cz/eslint-config-storybook';

export default defineConfig(base, react, storybook);
```

## IntelliJ IDE Setup

For the recommended IDE setup, please refer to the setup guide in the [base package README](../eslint-config/README.md#intellij-ide-setup).
