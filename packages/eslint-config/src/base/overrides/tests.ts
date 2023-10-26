import type { Linter } from 'eslint';

export const tests: Linter.ConfigOverride = {
  files: ['*.test.ts', '*.test.tsx'],
  extends: ['plugin:vitest/recommended'],
  rules: {
    'no-magic-numbers': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
};
