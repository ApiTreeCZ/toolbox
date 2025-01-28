import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const [config] = compat.config({
  extends: ['plugin:@next/next/recommended'],
  plugins: ['@next/next'],
  settings: {
    next: {
      rootDir: process.cwd(),
    },
  },
  overrides: [
    {
      files: ['next-env.d.ts'],
      rules: {
        'unicorn/prevent-abbreviations': 'off', // next-env.d.ts is a Next.js convention
      },
    },
    {
      files: ['src/app/**/*.ts', 'src/app/**/*.tsx', 'src/pages/**/*.ts', 'src/pages/**/*.tsx'],
      rules: {
        'react/function-component-definition': [
          // Allow components as function declarations in Next.js App and Page components for shorthand default exports
          'error',
          {
            namedComponents: ['arrow-function', 'function-declaration'],
            unnamedComponents: 'function-expression',
          },
        ],
      },
    },
    {
      files: ['app/**/layout.tsx', 'src/**/layouts/**/*.tsx'],
      rules: {
        '@next/next/no-head-element': 'off', // Allow <head/> element in Next.js App layouts
      },
    },
    {
      files: ['src/**/layouts/**/*.tsx', 'rc/pages/_app.tsx', 'src/pages/_document.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off', // Allow spreading props in Next.js App layouts, _app.tsx and _document.tsx
      },
    },
    {
      files: ['src/**/actions.ts'],
      rules: {
        '@typescript-eslint/require-await': 'off', // Next.js Server Actions must be async but don't need to await
      },
    },
  ],
});
