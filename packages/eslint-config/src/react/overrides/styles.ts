import type { Linter } from 'eslint';

export const styles = {
  files: [
    'styles.ts',
    'styles.tsx',
    '*.styles.ts',
    '*.styles.tsx',
    '**/styles/*.ts',
    '**/styles/*.tsx',
  ],
  rules: {
    'no-magic-numbers': 'off',
  },
} satisfies Linter.ConfigOverride;
