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
    files: ['**/*.{mdx,tsx}'],
    plugins: { react },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...rules.common,
      ...rules.jsx,
    },
    settings: { react: { version: 'detect' } },
  },
  { files: ['**/*.{ts,tsx}'], plugins: { formatjs }, rules: { ...baseRules.typescript, ...rules.formatjs } },
  {
    files: ['**/*.{mdx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks },
    rules: rules.hooks,
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
    languageOptions: mdx.configs.flat.languageOptions as Linter.LanguageOptions,
    plugins: { mdx },
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
    rules: { ...mdx.configs.flat.rules, ...rules.mdx },
  },
  {
    ...mdx.configs.flatCodeBlocks,
    files: ['**/*.mdx/*'],
  },
] satisfies Linter.Config[];
