import type { Linter } from 'eslint';

import { importExtensions } from '../constants';

import { overrides } from './overrides';
import { rules } from './rules';

export const config = {
  env: { browser: true },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', 'react-hooks', 'storybook'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsxPragma: null, // eslint-disable-line unicorn/no-null
  },
  rules,
  overrides,
  settings: {
    'import/extensions': [...importExtensions, '.tsx'],
    react: { version: 'detect' },
  },
} satisfies Linter.Config;
