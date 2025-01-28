import type { Linter } from 'eslint';

export const config = (apps = ['.']): Linter.Config[] => [
  {
    files: apps.map((app) => `${app}/src/**/models/**/*.ts`),
    rules: {
      'import/no-cycle': 'off', // Allow circular dependencies in models as they might reference each other
    },
  },
  {
    files: apps.map((app) => `${app}/src/**/*.ts`),
    rules: {
      'class-methods-use-this': 'off', // Allow class methods that don't use `this` keyword
      'no-empty-function': ['error', { allow: ['constructors'] }], // Allow empty constructors for Nest classes
      '@typescript-eslint/consistent-type-imports': 'off', // Allow types being imported without `type` keyword as Nest.js services and models are ambiguous
      '@typescript-eslint/no-extraneous-class': [
        // Allow classes that are used as Nest decorators
        'error',
        { allowWithDecorator: true },
      ],
    },
  },
];
