import { defineConfig } from 'vitest/config';

import { build, coverage } from './constants.js';

export const base = defineConfig({
  ...build,
  test: {
    environment: 'node',
    coverage: {
      ...coverage,
      include: ['src/**/*.ts'],
    },
  },
});
