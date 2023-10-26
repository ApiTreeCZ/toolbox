export const rules = {
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: 'function-expression',
    },
  ],
  'react/jsx-filename-extension': [
    'error',
    { allow: 'as-needed', extensions: ['.tsx'] },
  ],
  'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
  'react/jsx-sort-props': [
    'error',
    {
      reservedFirst: true,
    },
  ],
  'react/jsx-uses-react': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react-hooks/exhaustive-deps': 'warn',
};
