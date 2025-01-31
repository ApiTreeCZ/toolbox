import type { Configuration } from 'lint-staged';

import { special } from './constants.js';

/**
 * Lint-staged configuration for the root directory.
 */
export const root = {
  ...special,
  './*.{js,json,md,yml,yaml}': ['prettier --write'],
  './*.{js,ts}': ['eslint --cache --fix'],
  './*.ts': [() => 'tsc --build'],
} satisfies Configuration;
