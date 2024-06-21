import type { Linter } from 'eslint';

export const tests = {
  files: ['*.spec.ts', '*.test.ts', 'mock/**/*', 'mocks/**/*', 'tests/**/*'],
  extends: ['plugin:vitest/legacy-recommended'],
  rules: {
    'no-magic-numbers': 'off', // Allow magic numbers in tests and mocks
    'unicorn/consistent-function-scoping': 'off', // Allow nested functions in tests and mocks
    'unicorn/prevent-abbreviations': 'off', // Allow abbreviations in tests and mocks
  },
} satisfies Linter.ConfigOverride;
