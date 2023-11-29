import type { Linter } from 'eslint';

export const rules: Linter.RulesRecord = {
  'class-methods-use-this': 'off', // Allow class methods that don't use `this` keyword
  'no-empty-function': ['error', { allow: ['constructors'] }], // Allow empty constructors for Nest classes
  'unicorn/prefer-module': 'off', // Allow CommonJS as Nest doesn't support ES modules yet
  'unicorn/prefer-top-level-await': 'off', // Irrelevant as top-level await needs ESM support (see above)
  '@typescript-eslint/no-extraneous-class': [
    // Allow classes that are used as Nest decorators
    'error',
    { allowWithDecorator: true },
  ],
};
