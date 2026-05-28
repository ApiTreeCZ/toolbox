import type { Linter } from 'eslint';

export const tests: Linter.RulesRecord = {
  'formatjs/no-literal-string-in-jsx': 'off', // Allow literal strings in JSX in stories and tests
  'react/jsx-props-no-spreading': 'off', // Allow spreading props in stories and tests
};
