import type { Configuration } from 'lint-staged';

export const special = {
  './.github/**/*.{yml,yaml}': ['prettier --write'],
  './.changeset/*.{json,md}': ['prettier --write'],
} satisfies Configuration;
