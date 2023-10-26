export const tests = {
  files: ['*.test.ts', '*.test.tsx'],
  extends: ['plugin:vitest/recommended'],
  rules: {
    'no-magic-numbers': 'off',
    'unicorn/consistent-function-scoping': 'off',
  },
};
