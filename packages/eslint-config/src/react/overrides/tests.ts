import type { Linter } from 'eslint';

import { tests as base } from '../../base/overrides/tests';

export const tests: Linter.ConfigOverride[] = [
  { ...base, files: [base.files, '*.test.tsx'] },
  {
    files: '*.test.tsx',
    extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  },
  {
    files: ['*.stories.tsx', '*.test.tsx'],
    rules: {
      'react/jsx-props-no-spreading': 'off', // Allow spreading props in stories and tests
    },
  },
];
