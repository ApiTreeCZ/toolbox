import type { Linter } from 'eslint';

export const mdx: Linter.RulesRecord = {
  'react/jsx-filename-extension': [
    // Allow JSX in MDX files
    'error',
    { allow: 'as-needed', extensions: ['.mdx'] },
  ],
};
