import type { Configuration } from 'lint-staged';

/**
 * Lint-staged configuration for monorepo workspace.
 */
export const workspace = {
  './**/*.{js,mdx,ts,tsx}': ['eslint --cache --fix'],
  './**/*.{css,ejs,graphql,html,js,json,md,mdx,ts,tsx,yml,yaml}': ['prettier --write'],
  './**/*.{ts,tsx}': [() => 'tsc --build'],
} satisfies Configuration;
