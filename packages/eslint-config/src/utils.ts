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
