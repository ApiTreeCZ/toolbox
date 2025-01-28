import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const [config] = compat.config({
  overrides: [
    {
      files: ['**/src/**/models/**/*.ts'],
      rules: {
        'import/no-cycle': 'off', // Allow circular dependencies in models as they might reference each other
      },
    },
    {
      files: ['**/src/**/*.ts'],
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
  ],
});
