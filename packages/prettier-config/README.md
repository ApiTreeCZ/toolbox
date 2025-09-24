<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# Prettier Config

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Fprettier-config)](https://www.npmjs.com/package/@apitree.cz/prettier-config)

### [Prettier](https://prettier.io) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/prettier-config prettier
```

### PNPM Monorepos

Prior to the installation, add the following to your repository root `pnpm-workspace.yaml`:

```yaml
publicHoistPattern:
  - '*prettier*'
```

Install and use the package in the root only.

## Usage

Add the following configuration to your `prettier.config.js`:

```javascript
export { config as default } from '@apitree.cz/prettier-config';
```

## IntelliJ IDE Setup

Following IntelliJ IDEs setup is recommended for the best developer experience:

<img alt="IntelliJ Prettier Setup" src="../../public/intellij-prettier-setup.png" width="730" />

### Recommended Values

#### ✅ Automatic Prettier configuration

#### Run for files

```
{**/*,*}.{css,ejs,graphql,html,js,json,md,mdx,ts,tsx,yml,yaml}
```

#### ✅ Run on save
