import type { Linter } from 'eslint';

import { extraneousDependenciesPatterns, importExtensions } from './constants';

const getImportExtensionsRecord = (extensions: string[]) => {
  const record: Record<string, 'never'> = {};
  for (const extension of extensions) {
    record[extension.replace('.', '')] = 'never';
  }
  return record;
};

export const getExtraneousDependenciesRule = (
  ...patterns: string[]
): Linter.RulesRecord => ({
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: [...extraneousDependenciesPatterns, ...patterns] },
  ],
});

export const getImportExtensionsRule = (
  ...extensions: string[]
): Linter.RulesRecord => ({
  'import/extensions': [
    'error',
    'ignorePackages',
    getImportExtensionsRecord([...importExtensions, ...extensions]),
  ],
});
