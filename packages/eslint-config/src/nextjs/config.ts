import { FlatCompat } from '@eslint/eslintrc';
import type { Linter } from 'eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const [next] = compat.config({
  extends: ['plugin:@next/next/recommended'],
  plugins: ['@next/next'],
  settings: {
    next: {
      rootDir: process.cwd(),
    },
  },
});

export const config = (apps = ['.']): Linter.Config[] => {
  next.files = apps.map((app) => `${app}/**/*`);

  return [
    next,
    {
      files: apps.map((app) => [`${app}/src/**/layout.tsx`, `${app}/src/**/layouts/**/*.tsx`]).flat(),
      rules: {
        '@next/next/no-head-element': 'off', // Allow <head/> element in Next.js App layouts
      },
    },
    {
      files: apps
        .map((app) => [
          `${app}/src/**/layout.tsx`,
          `${app}/src/**/layouts/**/*.tsx`,
          `${app}/src/pages/_app.tsx`,
          `${app}/src/pages/_document.tsx`,
        ])
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
};
