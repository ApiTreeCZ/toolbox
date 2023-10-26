import type { Linter } from 'eslint';

export const common: Linter.RulesRecord = {
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: 'function-expression',
    },
  ],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
};
