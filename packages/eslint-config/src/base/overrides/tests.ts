import type { Linter } from 'eslint';

export const tests = {
  files: ['*.spec.ts', '*.test.ts'],
  extends: ['plugin:vitest/recommended'],
  rules: {
    'no-magic-numbers': 'off', // Allow magic numbers in tests
    'unicorn/consistent-function-scoping': 'off', // Allow nested functions in tests
    'unicorn/prevent-abbreviations': 'off', // Allow abbreviations in tests
  },
} satisfies Linter.ConfigOverride;
