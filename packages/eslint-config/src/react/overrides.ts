export const overrides = [
  {
    files: '*.test.tsx',
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  },
  {
    files: ['*.stories.tsx', '*.test.tsx'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
];
