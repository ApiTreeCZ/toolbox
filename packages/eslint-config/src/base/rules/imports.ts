export const imports = {
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
        '/scripts/**/*',
        '/stories/**/*',
        '/tests/**/*',
        '/types/*.d.ts',
        'typedoc.config.js',
        'vitest.config.ts',
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
