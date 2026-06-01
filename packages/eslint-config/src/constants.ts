export const extraneousDependenciesPatterns = [
  '**/*.config.js',
  '**/*.config.ts',
  '**/*.d.ts',
  '**/*.test.js',
  '**/*.test.jsx',
  '**/*.test.ts',
  '**/*.test.tsx',
  '**/.storybook/**/*',
  '**/__mocks__/**/*',
  '**/__tests__/**/*',
  '**/codegen.ts',
  '**/docs/**/*',
  '**/mock/**/*',
  '**/mocks/**/*',
  '**/scripts/**/*',
  '**/stories/**/*',
  '**/storybook/**/*',
  '**/test/**/*',
  '**/tests/**/*',
] as const;

export const importExtensions = ['.ts', '.tsx'] as const;
