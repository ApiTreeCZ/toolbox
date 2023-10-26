import { defineConfig } from 'vitest/config';

import { coverage } from './constants.js';

export const config = defineConfig({
  test: {
    environment: 'node',
    coverage: {
      ...coverage,
      include: ['src/**/*.ts'],
    },
  },
});
