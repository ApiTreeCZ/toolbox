export const extraneousDependenciesPatterns = [
  '**/*.config.js',
  '**/*.config.mjs',
  '**/*.config.ts',
  '**/codegen.ts',
  '**/scripts/**/*',
  '**/tests/**/*',
  '**/types/*.d.ts',
  '**/vite.config.ts',
] as const;

export const importExtensions = ['.js', '.ts'] as const;
