import type { Options } from 'prettier';

export const config: Options = {
  arrowParens: 'always',
  bracketSpacing: true,
  plugins: ['prettier-plugin-packagejson'],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
