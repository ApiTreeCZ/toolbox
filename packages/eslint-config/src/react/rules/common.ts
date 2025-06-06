import type { Linter } from 'eslint';

export const common: Linter.RulesRecord = {
  'react/destructuring-assignment': [
    // Enforce destructuring assignment for React component props
    'error',
    'always',
    { destructureInSignature: 'always', ignoreClassFields: false },
  ],
  'react/function-component-definition': [
    // Prefer arrow functions for React components and avoid unnamed components with function expressions
    'error',
    {
      namedComponents: ['arrow-function', 'function-declaration'],
      unnamedComponents: 'function-expression',
    },
  ],
  'react/no-danger': 'error', // Avoid using dangerouslySetInnerHTML
  'react/prop-types': 'off', // Prefer TypeScript prop types
  'react/react-in-jsx-scope': 'off', // Don't require React import in JSX files
  'react/require-default-props': 'off', // Prefer TypeScript prop types
};
