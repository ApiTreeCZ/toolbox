import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

import { coverage } from './constants.js';

export const react = defineConfig({
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
