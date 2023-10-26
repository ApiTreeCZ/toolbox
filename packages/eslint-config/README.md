<div align="center">

<a href="https://github.com/ApiTreeCZ">
<img alt="ApiTree s.r.o." src="https://www.apitree.cz/static/images/logo-header.svg" width="120" />
</a>

# ESLint Config

### ESLint configuration for ApiTree projects

</div>

## Installation

```bash
pnpm add --save-dev @apitree/eslint-config eslint
```

## Usage

Use one of the following configurations in your `.eslintrc.cjs`:

### Base

```javascript
module.exports = {
  extends: '@apitree',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

### React

```javascript
module.exports = {
  extends: '@apitree/eslint-config/react',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

### Next.js

```javascript
module.exports = {
  extends: '@apitree/eslint-config/nextjs',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```
