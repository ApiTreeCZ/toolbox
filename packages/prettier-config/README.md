<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://raw.githubusercontent.com/ApiTreeCZ/toolbox/refs/heads/develop/public/apitree.png?v=2025-01-28" width="201" />
</a>

# Prettier Config

### [Prettier](https://prettier.io) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/prettier-config prettier
```

## Usage

Add the following configuration to your `prettier.config.js`:

```javascript
export { config as default } from '@apitree.cz/prettier-config';
```

## IntelliJ (JetBrains) IDE Setup

Go to `Settings` > `Languages & Frameworks` > `JavaScript` > `Prettier` and set the following:

<img alt="IntelliJ Prettier Setup" src="./intellij-prettier-setup.png" width="730" />
