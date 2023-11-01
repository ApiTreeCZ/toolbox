import type { Linter } from 'eslint';

import { rules } from './rules';

export const config = {
  env: { browser: false },
  rules,
} satisfies Linter.Config;
