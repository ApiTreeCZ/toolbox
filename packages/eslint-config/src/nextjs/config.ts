import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export const config = (apps = ['.']): Linter.Config[] => [
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
    plugins: ['@next/next'],
    settings: {
      next: {
        rootDir: process.cwd(),
      },
    },
  }),
  {
    files: apps.map((app) => `${app}/next-env.d.ts`),
    rules: {
      'unicorn/prevent-abbreviations': 'off', // next-env.d.ts is a Next.js convention
    },
  },
  {
    files: apps.map((app) => [`${app}/src/app/**/*.{ts,tsx}`, `${app}/src/pages/**/*.{ts,tsx}`]).flat(),
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
    files: apps.map((app) => [`${app}/app/**/layout.tsx`, `${app}/src/**/layouts/**/*.tsx`]).flat(),
    rules: {
      '@next/next/no-head-element': 'off', // Allow <head/> element in Next.js App layouts
    },
  },
  {
    files: apps
      .map((app) => [`${app}/src/**/layouts/**/*.tsx`, `${app}/src/pages/_app.tsx`, `${app}/src/pages/_document.tsx`])
      .flat(),
    rules: {
      'react/jsx-props-no-spreading': 'off', // Allow spreading props in Next.js App layouts, _app.tsx and _document.tsx
    },
  },
  {
    files: apps.map((app) => `${app}/src/**/actions.ts`),
    rules: {
      '@typescript-eslint/require-await': 'off', // Next.js Server Actions must be async but don't need to await
    },
  },
];
