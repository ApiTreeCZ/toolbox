import type { Linter } from 'eslint';

export = {
  extends: ['airbnb-base', './base'],
} satisfies Linter.Config;
