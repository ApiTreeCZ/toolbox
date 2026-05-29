<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# ESLint Config NestJS

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Feslint-config-nestjs)](https://www.npmjs.com/package/@apitree.cz/eslint-config-nestjs)

### [ESLint](https://eslint.org) configuration for NestJS projects in ApiTree

</div>

## Installation

This package **must** be used in conjunction with the base `@apitree.cz/eslint-config` package. Make sure both are installed:

```bash
pnpm add --save-dev @apitree.cz/eslint-config @apitree.cz/eslint-config-nestjs eslint
```

### Monorepos

Install and use the package in the root only.

## Usage

Define both `base` and `nestjs` configurations in your repository's root `eslint.config.js` file:

```javascript
import { defineConfig } from 'eslint/config';
import { base } from '@apitree.cz/eslint-config';
import { nestjs } from '@apitree.cz/eslint-config-nestjs';

export default defineConfig(base, nestjs(['apps/<nestjs-app>']));
```

> Omit the `apps` array argument if you have a single NestJS app repository (no monorepo).

## IntelliJ IDE Setup

For the recommended IDE setup (e.g., IntelliJ), please refer to the setup guide in the [base package README](../eslint-config/README.md#intellij-ide-setup).
