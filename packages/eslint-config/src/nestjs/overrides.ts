import type { Linter } from 'eslint';

export const overrides = [
  { files: 'src/*/models/*.ts', rules: { 'import/no-cycle': 'off' } },
] satisfies Linter.ConfigOverride[];
