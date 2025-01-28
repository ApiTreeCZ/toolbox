<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://raw.githubusercontent.com/ApiTreeCZ/toolbox/refs/heads/develop/public/apitree.png?v=2025-01-28" width="201" />
</a>

# ESLint Config

### [ESLint](https://eslint.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/eslint-config eslint
```

## Usage

Use one of the following configurations in your repository's root `eslint.config.js` file.

### Base

```javascript
export { base as default } from '@apitree.cz/eslint-config';
```

### React

```javascript
import { base, react } from '@apitree.cz/eslint-config';

export default [...base, ...react];
```

### Next.js

Next.js configuration requires to specify the path to the app(s).

```javascript
import { base, react, nextjs } from '@apitree.cz/eslint-config';

export default [
  ...base,
  ...react,
  {
    files: ['apps/*/<next-js-app-name>/**/*'],
    // or `files: ['**/*.{ts,tsx}']` in single-app repo
    ...nextjs,
  },
];
```

### Nest.js

Nest.js configuration requires to specify the path to the app(s).

```javascript
import { base, nestjs } from '@apitree.cz/eslint-config';

export default [
  ...base,
  {
    files: ['apps/*/<nest-js-app-name>/**/*'],
    // or `files: ['**/*.ts']` in single-app repo
    ...nestjs,
  },
];
```
