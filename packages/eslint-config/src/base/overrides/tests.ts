import type { Linter } from 'eslint';

export const tests = {
  files: '*.test.ts',
  extends: ['plugin:vitest/recommended'],
  rules: {
    'no-magic-numbers': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
} satisfies Linter.ConfigOverride;
