import type { Linter } from 'eslint';

export const dts: Linter.RulesRecord = {
  'unicorn/prevent-abbreviations': 'off', // Allow abbreviations in TypeScript definitions (often auto-generated)
};
