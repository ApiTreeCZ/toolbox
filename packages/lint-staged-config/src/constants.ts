import type { Configuration } from 'lint-staged';

export const special = {
  './.agents/**/*.{json,md}': ['prettier --write'],
  './.changeset/*.{json,md}': ['prettier --write'],
  './.claude/**/*.{json,md}': ['prettier --write'],
  './.github/**/*.js': ['eslint --cache --fix'],
  './.github/**/*.{js,json,md,yml,yaml}': ['prettier --write'],
} satisfies Configuration;
