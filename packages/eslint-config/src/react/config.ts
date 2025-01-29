import vitest from '@vitest/eslint-plugin';
import type { Linter } from 'eslint';
import formatjs from 'eslint-plugin-formatjs';
import jestDom from 'eslint-plugin-jest-dom';
import mdx from 'eslint-plugin-mdx';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

import * as baseRules from '../base/rules/index.js';

import * as rules from './rules/index.js';

export const config = [
  {
    files: ['**/*.tsx'],
    plugins: {
      formatjs,
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    rules: {
      ...baseRules.typescript,
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...rules.common,
      ...rules.formatjs,
      ...rules.hooks,
      ...rules.jsx,
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    files: [
      '**/*.style.ts',
      '**/*.style.tsx',
      '**/*.styles.ts',
      '**/*.styles.tsx',
      '**/style.ts',
      '**/styles.ts',
      '**/styles.tsx',
      '**/styles/*.ts',
      '**/styles/*.tsx',
    ],
    rules: rules.styles,
  },
  {
    files: ['**/*.spec.tsx', '**/*.test.tsx', '**/*.tests.tsx', '**/test/**/*.tsx', '**/tests/**/*.tsx'],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: [
      '**/*.spec.tsx',
      '**/*.stories.tsx',
      '**/*.test.tsx',
      '**/*.tests.tsx',
      '**/mock/**/*.tsx',
      '**/mocks/**/*.tsx',
      '**/stories/**/*.tsx',
      '**/tests/**/*.tsx',
    ],
    plugins: {
      vitest,
    },
    rules: { ...vitest.configs.recommended.rules, ...baseRules.tests, ...rules.tests },
  },
  {
    files: ['**/*.mdx'],
    plugins: {
      mdx,
    },
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
    rules: { ...mdx.configs.flat.rules, ...mdx.configs.flatCodeBlocks.rules, ...rules.mdx },
  },
] satisfies Linter.Config[];
