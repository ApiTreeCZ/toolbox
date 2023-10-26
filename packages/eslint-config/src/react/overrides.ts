import type { Linter } from 'eslint';

export const overrides: Linter.ConfigOverride[] = [
  {
    files: '*.test.tsx',
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  },
  {
    files: ['*.stories.tsx', '*.test.tsx'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    files: 'next-env.d.ts',
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['src/pages/**/*.ts', 'src/pages/**/*.tsx'],
    rules: {
      'no-restricted-exports': 'off',
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
];
