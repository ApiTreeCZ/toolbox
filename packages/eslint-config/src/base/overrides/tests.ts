import type { Linter } from 'eslint';

export const tests = {
  files: '*.test.ts',
  extends: ['plugin:vitest/recommended'],
  rules: {
    'no-magic-numbers': 'off', // Allow magic numbers in tests
    'unicorn/consistent-function-scoping': 'off', // Allow nested functions in tests
  },
} satisfies Linter.ConfigOverride;
