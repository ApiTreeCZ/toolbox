export const extraneousDependenciesPatterns = [
  '*.config.js',
  '*.config.ts',
  '/scripts/**/*',
  '/tests/**/*',
  '/types/*.d.ts',
] as const;

export const importExtensions = ['.cjs', '.js', '.ts'] as const;
