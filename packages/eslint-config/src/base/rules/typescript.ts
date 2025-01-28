import type { Linter } from 'eslint';

export const typescript: Linter.RulesRecord = {
  '@typescript-eslint/consistent-type-assertions': 'error', // Enforce consistent usage of type assertions
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Prefer interface to type
  '@typescript-eslint/consistent-type-exports': 'error', // Enforce consistent usage of type exports
  '@typescript-eslint/consistent-type-imports': 'error', // Enforce types being imported with `type` keyword
  '@typescript-eslint/no-empty-interface': 'error', // Disallow empty interfaces
  '@typescript-eslint/no-unsafe-declaration-merging': 'error', // Guard declaration merging against unsafe usage
  '@typescript-eslint/no-unused-vars': 'off', // Guarded by eslint-plugin-unused-imports
  '@typescript-eslint/no-use-before-define': 'error', // Disallow usage of variables before their declaration
  '@typescript-eslint/sort-type-constituents': 'error', // Sort union or intersection type members alphabetically
};
