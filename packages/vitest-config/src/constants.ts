import type { CoverageOptions } from 'vitest';

export const coverage = {
  all: true,
  provider: 'istanbul',
  reporter: ['cobertura', 'html', 'lcovonly', 'text'],
} satisfies CoverageOptions;
