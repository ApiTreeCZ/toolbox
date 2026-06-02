import type { Configuration } from 'lint-staged';

export const special = {
  './.agents/**/*.ts': [() => 'tsc --build'],
  './.agents/**/*.{js,json,md,ts}': ['prettier --write'],
  './.agents/**/*.{js,ts}': ['eslint --cache --fix'],
  './.changeset/*.{json,md}': ['prettier --write'],
  './.claude/**/*.ts': [() => 'tsc --build'],
  './.claude/**/*.{js,json,md,ts}': ['prettier --write'],
  './.claude/**/*.{js,ts}': ['eslint --cache --fix'],
  './.github/**/*.ts': [() => 'tsc --build'],
  './.github/**/*.{js,json,md,ts,yml,yaml}': ['prettier --write'],
  './.github/**/*.{js,ts}': ['eslint --cache --fix'],
} satisfies Configuration;
