import type { ViteUserConfig } from 'vitest/config';
import type { CoverageOptions } from 'vitest/node';

export const build = {
  build: { sourcemap: false },
  logLevel: 'error',
} satisfies ViteUserConfig;

export const coverage = {
  all: true,
  provider: 'v8',
  reporter: ['cobertura', 'html', 'lcovonly', 'text'],
} satisfies CoverageOptions;
