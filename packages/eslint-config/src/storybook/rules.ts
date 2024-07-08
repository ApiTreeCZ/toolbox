import type { Linter } from 'eslint';

import { getExtraneousDependenciesRule } from '../utils';

export const rules: Linter.RulesRecord = {
  ...getExtraneousDependenciesRule('**/config/**/*'),
  'react/jsx-props-no-spreading': 'off',
  'unicorn/prefer-module': 'off',
};
