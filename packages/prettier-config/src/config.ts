import type { Config } from 'prettier';

export const config: Config = {
  arrowParens: 'always',
  bracketSpacing: true,
  plugins: ['prettier-plugin-packagejson'],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      // https://github.com/prettier/prettier/issues/15956
      files: '*.json',
      options: { trailingComma: 'none' },
    },
  ],
};
