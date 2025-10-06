import type { Configuration } from 'lint-staged';

import { workspace } from './workspace.js';

/**
 * Lint-staged configuration for monorepo workspace containing distributable library.
 */
export const library = {
  ...workspace,
  './**/*.{ts,tsx}': [() => 'tsc --build tsconfig.lib.json'],
} satisfies Configuration;
