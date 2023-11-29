import type { Linter } from 'eslint';

export const common: Linter.RulesRecord = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
    },
  ], // Allow implicit return in array methods
  'arrow-body-style': ['error', 'as-needed'], // Allow omitting braces when possible
  'arrow-parens': ['error', 'always'], // Require parens around arrow function arguments
  'comma-dangle': 'off', // Allow dangling commas
  'consistent-return': 'off', // Allow implicit return in arrow functions
  curly: ['error', 'multi-line'], // Require braces around multiline blocks
  'default-case': 'off', // Allow switch statements without default
  'function-paren-newline': 'off', // Allow parens on same line as function name
  'guard-for-in': 'off', // Allow for-in without if statement
  'implicit-arrow-linebreak': 'off', // Allow implicit return in arrow functions
  'max-classes-per-file': ['error', { ignoreExpressions: true, max: 3 }], // Allow multiple classes per file
  'no-confusing-arrow': 'off', // Do not guard against confusing arrow functions as we enforce parens
  'no-console': 'warn', // Warn against console.log
  'no-debugger': 'warn', // Warn against debugger
  'no-magic-numbers': [
    'error',
    { ignore: [-1, 0, 1], ignoreArrayIndexes: true },
  ], // Disallow magic numbers
  'no-multiple-empty-lines': ['error', { max: 1 }], // Disallow multiple empty lines
  'no-nested-ternary': 'error', // Avoid nested ternary expressions
  'no-param-reassign': 'off', // Allow param reassignment
  'no-restricted-exports': [
    // Allow re-exporting default as named
    'error',
    {
      restrictedNamedExports: [],
      restrictDefaultExports: {
        direct: false,
        named: true,
        defaultFrom: false,
        namedFrom: false,
        namespaceFrom: true,
      },
    },
  ],
  'no-restricted-syntax': [
    // Compatibility setting for @typescript-eslint rules
    'error',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'no-shadow': 'off', // Allow variables shadowing
  'no-use-before-define': 'off', // Guarded by @typescript-eslint/no-use-before-define
  'no-warning-comments': ['warn', { terms: ['fixme', 'todo'] }], // Warn against fixme and todo comments
  'object-curly-newline': ['error', { consistent: true }], // Enforce consistent line breaks inside braces
};
