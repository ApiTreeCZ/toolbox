import type { Linter } from 'eslint';

export const imports: Linter.RulesRecord = {
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      cjs: 'never',
      js: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '*.config.js',
        '*.config.ts',
        '/scripts/**/*',
        '/stories/**/*',
        '/tests/**/*',
        '/types/*.d.ts',
      ],
    },
  ],
  'import/order': [
    'error',
    {
      alphabetize: {
        caseInsensitive: true,
        order: 'asc',
      },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    },
  ],
  'import/prefer-default-export': 'off',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': ['error', { ignoreRestSiblings: true }],
};
