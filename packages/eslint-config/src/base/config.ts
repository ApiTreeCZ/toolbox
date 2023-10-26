import type { Linter } from 'eslint';

import { overrides } from './overrides';
import { rules } from './rules';

export const config = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'turbo',
  ],
  ignorePatterns: ['.idea', '.vscode', 'coverage', 'dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2024,
    jsxPragma: null, // eslint-disable-line unicorn/no-null
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'unicorn',
    'unused-imports',
    'storybook',
    'prettier',
    'turbo',
  ],
  rules,
  settings: {
    'import/extensions': ['.cjs', '.js', '.ts', '.tsx'],
    'import/resolver': { typescript: {} },
  },
  overrides,
} satisfies Linter.Config;
