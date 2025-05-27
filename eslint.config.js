import { base, react } from '@apitree.cz/eslint-config';

export default [
  ...base,
  ...react,
  {
    files: ['packages/eslint-config/tests/**/*.test.ts'],
    rules: {
      'vitest/expect-expect': 'off',
    },
  },
];
