import type { Linter } from 'eslint';

export const config = [
  {
    files: ['src/*/models/*.ts'],
    rules: {
      'import/no-cycle': 'off', // Allow circular dependencies in models as they might reference each other
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'class-methods-use-this': 'off', // Allow class methods that don't use `this` keyword
      'no-empty-function': ['error', { allow: ['constructors'] }], // Allow empty constructors for Nest classes
      'unicorn/prefer-module': 'off', // Allow CommonJS as Nest doesn't support ES modules yet
      'unicorn/prefer-top-level-await': 'off', // Irrelevant as top-level await needs ESM support (see above)
      '@typescript-eslint/consistent-type-imports': 'off', // Allow types being imported without `type` keyword as Nest.js services and models are ambiguous
      '@typescript-eslint/no-extraneous-class': [
        // Allow classes that are used as Nest decorators
        'error',
        { allowWithDecorator: true },
      ],
    },
  },
] satisfies Linter.Config[];
