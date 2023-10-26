import type { Linter } from 'eslint';

import { config } from './nextjs/config';

export = {
  ...config,
  extends: ['./react', ...config.extends],
} satisfies Linter.Config;
