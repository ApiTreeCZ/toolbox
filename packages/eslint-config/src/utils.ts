import type { ESLint } from 'eslint';

/**
 * Type guard to check if a given object is an ESLint plugin.
 */
export function assertPlugin(plugin: unknown) {
  return plugin as ESLint.Plugin;
}

/**
 * Get a record of import extensions for the `import/extensions` rule.
 */
export function getImportExtensionsRecord(extensions: string[] | readonly string[]) {
  const record: Record<string, 'never'> = {};
  for (const extension of extensions) {
    record[extension.replace('.', '')] = 'never';
  }
  return record;
}
