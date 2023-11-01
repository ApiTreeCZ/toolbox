<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# ESLint Config

### [ESLint](https://eslint.org) configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree.cz/eslint-config eslint
```

## Usage

Use one of the following configurations in your `.eslintrc.cjs`:

### Base

```javascript
module.exports = {
  extends: '@apitree.cz',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

### React

```javascript
module.exports = {
  extends: '@apitree.cz/eslint-config/react',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

### Next.js

```javascript
module.exports = {
  extends: '@apitree.cz/eslint-config/nextjs',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

### Nest.js

```javascript
module.exports = {
  extends: '@apitree.cz/eslint-config/nestjs',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```
