export const extraneousDependenciesPatterns = [
  '**/*.config.js',
  '**/*.config.ts',
  '**/.storybook/**/*',
  '**/__mocks__/**/*',
  '**/codegen.ts',
  '**/docs/**/*',
  '**/mock/**/*',
  '**/mocks/**/*',
  '**/scripts/**/*',
  '**/stories/**/*',
  '**/storybook/**/*',
  '**/test/**/*',
  '**/tests/**/*',
  '**/types/*.d.ts',
] as const;

export const importExtensions = ['.ts', '.tsx'] as const;
