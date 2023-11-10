import type { Linter } from 'eslint';

export const overrides = [
  {
    files: 'next-env.d.ts',
    rules: {
      'unicorn/prevent-abbreviations': 'off', // next-env.d.ts is a Next.js convention
    },
  },
  {
    files: ['src/pages/**/*.ts', 'src/pages/**/*.tsx'],
    rules: {
      'react/function-component-definition': [
        // Allow components as function declarations in Next.js pages for shorthand default exports
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
      'react/jsx-props-no-spreading': 'off', // Allow spreading props in Next.js _app.tsx and _document.tsx
    },
  },
] satisfies Linter.ConfigOverride[];
