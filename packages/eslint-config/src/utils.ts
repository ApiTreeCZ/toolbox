import type { Linter } from 'eslint';

import { extraneousDependenciesPatterns, importExtensions } from './constants.js';

const getImportExtensionsRecord = (extensions: string[]) => {
  const record: Record<string, 'never'> = {};
  for (const extension of extensions) {
    record[extension.replace('.', '')] = 'never';
  }
  return record;
};

export const getExtraneousDependenciesRule = (...patterns: string[]): Linter.RulesRecord => ({
  'import/no-extraneous-dependencies': [
    // Avoid importing devDependencies in production code
    'error',
    { devDependencies: [...extraneousDependenciesPatterns, ...patterns] },
  ],
});

export const getImportExtensionsRule = (...extensions: string[]): Linter.RulesRecord => ({
  'import/extensions': [
    // Avoid unnecessary file extensions in imports
    'error',
    'ignorePackages',
    getImportExtensionsRecord([...importExtensions, ...extensions]),
  ],
});
