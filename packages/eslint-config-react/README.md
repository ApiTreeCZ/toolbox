<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# ESLint Config React

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Feslint-config-react)](https://www.npmjs.com/package/@apitree.cz/eslint-config-react)

### [ESLint](https://eslint.org) configuration for React projects in ApiTree

</div>

## Installation

This package **must** be used in conjunction with the base `@apitree.cz/eslint-config` package. Make sure both are installed:

```bash
pnpm add --save-dev @apitree.cz/eslint-config @apitree.cz/eslint-config-react eslint
```

### Monorepos

Install and use the package in the root only.

## Usage

Define both `base` and `react` configurations in your repository's root `eslint.config.js` file:

```javascript
import { defineConfig } from 'eslint/config';
import { base } from '@apitree.cz/eslint-config';
import { react } from '@apitree.cz/eslint-config-react';

export default defineConfig(base, react);
```

## IntelliJ IDE Setup

For the recommended IDE setup (e.g., IntelliJ), please refer to the setup guide in the [base package README](../eslint-config/README.md#intellij-ide-setup).
