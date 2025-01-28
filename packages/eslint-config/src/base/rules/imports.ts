import type { Linter } from 'eslint';

import { extraneousDependenciesPatterns, importExtensions } from '../../constants.js';
import { getImportExtensionsRecord } from '../../utils.js';

export const imports: Linter.RulesRecord = {
  'import/extensions': [
    // Avoid unnecessary file extensions in imports
    'error',
    'ignorePackages',
    getImportExtensionsRecord(importExtensions),
  ],
  'import/no-extraneous-dependencies': [
    // Avoid importing devDependencies in production code
    'error',
    { devDependencies: extraneousDependenciesPatterns },
  ],
  'import/order': [
    // Sort and group imports by type
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
  'import/prefer-default-export': 'off', // Prefer named exports
  'unused-imports/no-unused-imports': 'error', // Disallow unused imports
  'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }], // Disallow unused variables
};
