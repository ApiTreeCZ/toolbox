import type { Linter } from 'eslint';
import formatjs from 'eslint-plugin-formatjs';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import jestDom from 'eslint-plugin-jest-dom';
import storybook from 'eslint-plugin-storybook';
import mdx from 'eslint-plugin-mdx';

import { importExtensions } from '../constants.js';
import * as rules from './rules/index.js';

export const config = [
  ...(storybook.configs['flat/recommended'] as unknown as Linter.Config[]),
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
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...rules.common,
      ...rules.formatjs,
      ...rules.hooks,
      ...rules.imports,
      ...rules.jsx,
    },
    settings: {
      'import/extensions': [...importExtensions, '.tsx'],
      react: { version: 'detect' },
    },
  },
  {
    files: ['styles.ts', 'styles.tsx', '*.styles.ts', '*.styles.tsx', '**/styles/*.ts', '**/styles/*.tsx'],
    rules: rules.styles,
  },
  {
    files: ['**/tests/**/*.tsx, *.spec.tsx', '*.test.tsx'],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: ['**/mocks/**.tsx', '**/stories/**/*.tsx', '**/tests/**/*.tsx', '*.spec.tsx', '*.stories.tsx', '*.test.tsx'],
    rules: rules.tests,
  },
  {
    files: ['*.mdx'],
    rules: { ...mdx.configs.flat.rules, ...mdx.configs.flatCodeBlocks.rules, ...rules.mdx },
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: true }),
  },
] satisfies Linter.Config[];
