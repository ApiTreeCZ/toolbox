<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="../../public/apitree-logo.png" width="308" />
</a>

# Lint-staged Config

[![NPM Version](https://img.shields.io/npm/v/%40apitree.cz%2Flint-staged-config)](https://www.npmjs.com/package/@apitree.cz/lint-staged-config)

### [Lint-staged](https://github.com/lint-staged/lint-staged) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/lint-staged-config lint-staged
```

## Usage

### Monorepos

Install the package with `lint-staged` and create a `lint-staged.config.js` file in the root of your monorepo:

```js
export { root as default } from '@apitree.cz/lint-staged-config';
```

Then, create a `lint-staged.config.js` file in each workspace:

```js
export { workspace as default } from '@apitree.cz/lint-staged-config';
```

#### Workspaces with distributable packages

If the workspace contains a distributable package (aka library), use the following configuration instead:

```js
export { library as default } from '@apitree.cz/lint-staged-config';
```

> See the [WebStorm Settings in PNPM Monorepos](../ts-config/README.md#webstorm-settings-in-pnpm-monorepos) section in `@apitree.cz/ts-config` for further information.

### Single-package repos

Install the package and create a `lint-staged.config.js` file in the root of your project:

```js
export { singlePackage as default } from '@apitree.cz/lint-staged-config';
```
