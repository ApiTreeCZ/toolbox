export const extraneousDependenciesPatterns = [
  '**/*.config.js',
  '**/*.config.ts',
  '**/.storybook/**/*',
  '**/codegen.ts',
  '**/mock/**/*',
  '**/mocks/**/*',
  '**/scripts/**/*',
  '**/stories/**/*',
  '**/storybook/config/**/*',
  '**/test/**/*',
  '**/tests/**/*',
  '**/types/*.d.ts',
  '**/vite.config.ts',
] as const;

export const importExtensions = ['.ts', '.tsx'] as const;
