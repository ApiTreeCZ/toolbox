import type { Configuration } from 'lint-staged';

import { special } from './constants.js';

/**
 * Lint-staged configuration for the root directory.
 */
export const root = {
  ...special,
  './*.{css,ejs,graphql,html,js,json,md,mdx,ts,tsx,yml,yaml}': ['prettier --write'],
  './*.{js,mdx,ts,tsx}': ['eslint --cache --fix'],
  './*.{ts,tsx}': [() => 'tsc --build'],
  './docs/**/*.md': ['prettier --write'],
  './docs/**/*.{js,mdx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  './docs/**/*.{ts,tsx}': [() => 'tsc --build'],
  './scripts/**/*.js': ['prettier --write'],
  './scripts/**/*.{js,ts,tsx}': ['eslint --cache --fix'],
  './scripts/**/*.{ts,tsx}': [() => 'tsc --build'],
  './stories/**/*.{js,mdx,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  './stories/**/*.{ts,tsx}': [() => 'tsc --build'],
} satisfies Configuration;
