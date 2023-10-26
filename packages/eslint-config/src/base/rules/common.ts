import type { Linter } from 'eslint';

export const common: Linter.RulesRecord = {
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-parens': ['error', 'always'],
  'comma-dangle': 'off',
  'consistent-return': 'off',
  curly: ['error', 'multi-line'],
  'default-case': 'off',
  'function-paren-newline': 'off',
  'guard-for-in': 'off',
  'implicit-arrow-linebreak': 'off',
  'no-confusing-arrow': 'off',
  'no-console': 'warn',
  'no-debugger': 'warn',
  'no-magic-numbers': ['error', { ignore: [0, 1], ignoreArrayIndexes: true }],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-param-reassign': 'off',
  'no-restricted-exports': [
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
    'error',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'no-shadow': 'off',
  'no-use-before-define': 'off',
  'no-warning-comments': ['warn', { terms: ['fixme', 'todo'] }],
  'object-curly-newline': ['error', { consistent: true }],
};
