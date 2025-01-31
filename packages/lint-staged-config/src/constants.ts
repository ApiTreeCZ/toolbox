import type { Configuration } from 'lint-staged';

export const special = {
  './.github/**/*.{yml,yaml}': ['prettier --write'],
  './.changeset/*.md': ['prettier --write'],
} satisfies Configuration;
