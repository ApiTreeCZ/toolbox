import type { Linter } from 'eslint';

export const monorepo: Linter.RulesRecord = {
  'import/no-extraneous-dependencies': 'off', // Allow importing from monorepo packages
};
