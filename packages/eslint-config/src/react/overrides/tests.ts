import type { Linter } from 'eslint';

import { tests as base } from '../../base/overrides/tests';

export const tests: Linter.ConfigOverride[] = [
  { ...base, files: [...base.files, '*.spec.tsx', '*.test.tsx'] },
  {
    files: ['*.spec.tsx', '*.test.tsx'],
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    rules: base.rules,
  },
  {
    files: ['*.spec.tsx', '*.stories.tsx', '*.test.tsx'],
    rules: {
      'formatjs/no-literal-string-in-jsx': 'off', // Allow literal strings in JSX in stories and tests
      'react/jsx-props-no-spreading': 'off', // Allow spreading props in stories and tests
    },
  },
];
