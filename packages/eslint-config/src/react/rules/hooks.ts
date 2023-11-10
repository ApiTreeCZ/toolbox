import type { Linter } from 'eslint';

export const hooks: Linter.RulesRecord = {
  'react-hooks/exhaustive-deps': 'warn', // Warn when dependencies are incorrect in hooks
};
