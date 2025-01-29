import type { Linter } from 'eslint';

export const tests: Linter.RulesRecord = {
  'no-magic-numbers': 'off', // Allow magic numbers in tests
};
