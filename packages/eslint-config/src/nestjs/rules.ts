import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  'class-methods-use-this': 'off',
  'no-empty-function': ['error', { allow: ['constructors'] }],
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-top-level-await': 'off',
  '@typescript-eslint/no-extraneous-class': [
    'error',
    { allowWithDecorator: true },
  ],
};
