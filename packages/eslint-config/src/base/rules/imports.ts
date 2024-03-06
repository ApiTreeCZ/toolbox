import type { Linter } from 'eslint';

import { getExtraneousDependenciesRule, getImportExtensionsRule } from '../../utils';

export const imports: Linter.RulesRecord = {
  ...getImportExtensionsRule(),
  ...getExtraneousDependenciesRule('/mock/**/*', '/mocks/**/*'), // Allow importing devDependencies in mock files
  'import/prefer-default-export': 'off', // Prefer named exports
  'unused-imports/no-unused-imports': 'error', // Disallow unused imports
  'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }], // Disallow unused variables
  'import/order': 'off',
};
