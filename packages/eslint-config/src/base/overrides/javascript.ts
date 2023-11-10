import type { Linter } from 'eslint';

export const javascript = {
  files: '*.js',
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // Allow require() in JS files
  },
} satisfies Linter.ConfigOverride;
