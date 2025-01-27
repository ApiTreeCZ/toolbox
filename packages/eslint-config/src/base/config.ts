import eslint from '@eslint/js';
import globals from 'globals';
import imports from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import tseslint, { ConfigArray } from 'typescript-eslint';
import turbo from 'eslint-plugin-turbo';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import vitest from '@vitest/eslint-plugin';

import { importExtensions } from '../constants.js';

import * as rules from './rules/index.js';

export const config: ConfigArray = tseslint.config(
  {
    ignores: [
      '.idea/**/*',
      '.vscode/**/*',
      '**/build/**/*',
      '**/coverage/**/*',
      '**/dist/**/*',
      '**/node_modules/**/*',
    ],
  },
  eslint.configs.recommended,
  imports.flatConfigs.recommended,
  prettier,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'unused-imports': unusedImports,
      turbo,
      unicorn,
    },
    languageOptions: {
      globals: globals.builtin,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: `${process.cwd()}/tsconfig.json`,
        projectService: true,
        sourceType: 'module',
      },
    },
    rules: {
      ...rules.common,
      ...rules.imports,
      ...rules.unicorn,
    },
    settings: {
      'import/extensions': importExtensions,
      'import/resolver': 'typescript',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: tseslint.configs.strictTypeChecked,
    rules: rules.typescript,
  },
  {
    files: ['*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ['*.spec.ts', '*.test.ts', '*.spec.tsx', '*.test.tsx', '**/mock/**/*', '**/mocks/**/*', '**/tests/**/*'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
);
