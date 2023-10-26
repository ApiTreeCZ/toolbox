import type { CoverageOptions } from 'vitest';

export const coverage = {
  all: true,
  provider: 'istanbul',
  reporter: ['html', 'text'],
} satisfies CoverageOptions;
