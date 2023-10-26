import type { Linter } from 'eslint';

export const javascript = {
  files: '*.js',
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
} satisfies Linter.ConfigOverride;
