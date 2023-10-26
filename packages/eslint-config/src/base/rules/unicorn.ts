import type { Linter } from 'eslint';

export const unicorn: Linter.RulesRecord = {
  'unicorn/no-array-callback-reference': 'off',
  'unicorn/prevent-abbreviations': [
    'error',
    {
      replacements: {
        args: {
          arguments: false,
        },
        docs: {
          documents: false,
          documentation: false,
        },
        params: {
          parameters: false,
        },
        prop: {
          property: false,
        },
        props: {
          properties: false,
        },
        ref: {
          reference: false,
        },
      },
    },
  ],
};
