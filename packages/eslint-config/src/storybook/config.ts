import type { Linter } from 'eslint';
import storybook from 'eslint-plugin-storybook';

export const config = [
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/.storybook/**/*', '**/storybook/**/*'],
    rules: {
      'react/jsx-props-no-spreading': 'off', // Allow spreading props in Storybook app
      'unicorn/prefer-module': 'off', // https://github.com/storybookjs/storybook/issues/26291
    },
  } satisfies Linter.Config,
];
