import type { Linter } from 'eslint';

import { typescript as base } from '../../base/overrides/typescript';

const [ts] = base;

export const typescript: Linter.ConfigOverride = {
  ...ts,
  files: [ts.files, '*.tsx'],
};
