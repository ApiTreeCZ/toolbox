import type { Config } from 'prettier';

export const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  plugins: ['prettier-plugin-packagejson', '@trivago/prettier-plugin-sort-imports'],
  // Group by external libraries and local files
  // TODO: load local import prefixes from tsconfig?
  importOrder: ['^node:(.*)', '<THIRD_PARTY_MODULES>', '^[./]'],
  // Separate import groups by newline
  importOrderSeparation: true,
  printWidth: 120,
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
} satisfies Config;
