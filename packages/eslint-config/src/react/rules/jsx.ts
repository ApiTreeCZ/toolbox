import type { Linter } from 'eslint';

export const jsx: Linter.RulesRecord = {
  'react/jsx-filename-extension': [
    // Allow JSX only in .tsx files
    'error',
    { allow: 'as-needed', extensions: ['.tsx'] },
  ],
  'react/jsx-key': 'error', // Require keys in iterators and map calls
  'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }], // Avoid conditional renders with `&&` and `||`
  'react/jsx-props-no-spreading': [
    'error', // Disallow props spreading except for FormattedMessage (convenience for react-intl messages)
    { exceptions: ['FormattedMessage'] },
  ],
  'react/jsx-sort-props': [
    // Sort props alphabetically
    'error',
    {
      reservedFirst: true, // Put React reserved props first (e.g. key, ref)
      callbacksLast: true, // Put callback props last
    },
  ],
  'react/jsx-uses-react': 'off', // Avoid unnecessary React runtime import
  'react/no-unstable-nested-components': ['error', { allowAsProps: true }], // Avoid nested components that are unstable, however, allow them as props (preferably memoized)
  'react/self-closing-comp': ['error', { component: true, html: true }], // Enforce self-closing tags for components and HTML elements when they don't have children
};
