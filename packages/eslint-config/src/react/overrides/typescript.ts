import type { Linter } from 'eslint';

import { typescript as base } from '../../base/overrides/typescript';

export const typescript: Linter.ConfigOverride = {
  ...base,
  files: [...base.files, '*.tsx'],
};
