import type { Configuration } from 'lint-staged';

import { special } from './constants.js';
import { workspace } from './workspace.js';

/**
 * Lint-staged configuration for a single package repository.
 */
export const singlePackage = {
  ...special,
  ...workspace,
} satisfies Configuration;
