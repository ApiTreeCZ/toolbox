import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import type { Linter } from 'eslint';
import imports from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import turbo from 'eslint-plugin-turbo';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tsEslint, {
  configs as tsEslintConfigs,
  parser as tsEslintParser,
  plugin as tsEslintPlugin,
} from 'typescript-eslint';
import type { ConfigArray } from 'typescript-eslint';

import { importExtensions } from '../constants.js';

import * as rules from './rules/index.js';

export const config: ConfigArray = tsEslint.config(
  {
    ignores: [
      '.idea/**/*',
      '.vscode/**/*',
      '**/*.generated.*',
      '**/.next/**/*',
      '**/build/**/*',
      '**/coverage/**/*',
      '**/dist/**/*',
      '**/node_modules/**/*',
      '**/out/**/*',
      '**/public/**/*',
      '**/storybook-static/**/*',
    ],
  },
  eslint.configs.recommended,
  prettier,
  {
    extends: [imports.flatConfigs.recommended, imports.flatConfigs.typescript] as Linter.Config[],
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'unused-imports': unusedImports,
      turbo,
      unicorn,
    },
    languageOptions: {
      globals: {
        ...globals.builtin,
        ...globals.node,
      },
      parser: tsEslintParser,
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
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tsEslintConfigs.strictTypeChecked],
    rules: rules.typescript,
  },
  {
    files: ['**/*.js'],
    extends: [tsEslintConfigs.disableTypeChecked],
  },
  {
    files: [
      '**/*.spec.ts',
      '**/*.test.ts',
      '**/*.tests.ts',
      '**/mock/**/*.ts',
      '**/mocks/**/*.ts',
      '**/test/**/*.ts',
      '**/tests/**/*.ts',
    ],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...rules.tests,
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: rules.dts,
  },
);
