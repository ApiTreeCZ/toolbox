import type { Linter } from 'eslint';

export const hooks: Linter.RulesRecord = {
  'react-hooks/exhaustive-deps': 'error', // Disallow missing dependencies in React hooks
  'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
};
