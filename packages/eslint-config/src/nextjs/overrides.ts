import type { Linter } from 'eslint';

export const overrides = [
  {
    files: 'next-env.d.ts',
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['src/pages/**/*.ts', 'src/pages/**/*.tsx'],
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'function-expression',
        },
      ],
    },
  },
  {
    files: ['src/pages/_app.tsx', 'src/pages/_document.tsx'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
] satisfies Linter.ConfigOverride[];
