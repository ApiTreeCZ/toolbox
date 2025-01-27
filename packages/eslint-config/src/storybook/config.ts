import type { Linter } from 'eslint';
import { getExtraneousDependenciesRule } from '../utils.js';

export const config = {
  rules: {
    ...getExtraneousDependenciesRule('**/config/**/*'),
    'react/jsx-props-no-spreading': 'off',
    'unicorn/prefer-module': 'off',
  },
} satisfies Linter.Config;
