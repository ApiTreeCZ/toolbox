import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import imports from 'eslint-plugin-import';
import turbo from 'eslint-plugin-turbo';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import { configs as tsEslintConfigs, parser as tsEslintParser, plugin as tsEslintPlugin } from 'typescript-eslint';

import { importExtensions } from '../constants.js';
import { assertPlugin } from '../utils.js';

import * as rules from './rules/index.js';

export const config = defineConfig(
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
      '**/temp/**/*',
    ],
  },
  eslint.configs.recommended,
  {
    extends: [imports.flatConfigs.recommended, imports.flatConfigs.typescript],
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'unused-imports': unusedImports,
      turbo: assertPlugin(turbo),
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
        projectService: {
          allowDefaultProject: ['lint-staged.config.js', 'typedoc.config.js', 'vitest.config.js'],
        },
        tsconfigRootDir: process.cwd(),
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
        typescript: {
          alwaysTryTypes: true,
          project: process.cwd(),
        },
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
    plugins: { vitest: assertPlugin(vitest) },
    rules: {
      ...vitest.configs.recommended.rules,
      ...rules.tests,
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: rules.dts,
  },
  {
    files: ['**/lint-staged.config.js', '**/typedoc.config.js', '**/vitest.config.js'],
    rules: rules.monorepo,
  },
  prettier,
);
