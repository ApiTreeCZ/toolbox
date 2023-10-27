import { defineConfig } from 'vitest/config';

import { coverage } from './constants.js';

export const base = defineConfig({
  test: {
    environment: 'node',
    coverage: {
      ...coverage,
      include: ['src/**/*.ts'],
    },
  },
});
