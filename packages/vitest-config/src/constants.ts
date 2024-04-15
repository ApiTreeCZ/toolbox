import type { CoverageOptions } from 'vitest';

export const coverage = {
  all: true,
  provider: 'v8',
  reporter: ['cobertura', 'html', 'lcovonly', 'text'],
} satisfies CoverageOptions;
