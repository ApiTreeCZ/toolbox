import type { Linter } from 'eslint';

export = {
  extends: [require.resolve('./base')],
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    'unicorn/prefer-module': 'off',
  },
} satisfies Linter.Config;
