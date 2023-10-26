import type { Linter } from 'eslint';

export const javascript: Linter.ConfigOverride = {
  files: '*.js',
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
