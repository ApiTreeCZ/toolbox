import type { Linter } from 'eslint';
import storybook from 'eslint-plugin-storybook';

export const config = [
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/.storybook/**/*', '**/storybook/**/*'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'unicorn/prefer-module': 'off',
    },
  } satisfies Linter.Config,
];
