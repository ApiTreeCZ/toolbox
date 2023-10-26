import type { Linter } from 'eslint';

export const jsx: Linter.RulesRecord = {
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
};
