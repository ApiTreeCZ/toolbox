import type { Linter } from 'eslint';

import {
  getExtraneousDependenciesRule,
  getImportExtensionsRule,
} from '../../utils';

export const imports: Linter.RulesRecord = {
  ...getImportExtensionsRule(),
  ...getExtraneousDependenciesRule(),
  'import/order': [
    'error',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    },
  ],
  'import/prefer-default-export': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }],
};
