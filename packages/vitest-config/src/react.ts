import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { build, coverage } from './constants.js';

export const react = defineConfig({
  ...build,
  plugins: [viteReact()],
  test: {
    environment: 'jsdom',
    coverage: {
      ...coverage,
      include: ['src/**/*.{ts,tsx}'],
    },
    setupFiles: ['tests/setup.ts'],
  },
});
