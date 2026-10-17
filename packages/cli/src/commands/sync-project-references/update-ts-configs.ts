import { readFile, writeFile } from 'node:fs/promises';

import { notNil } from '@apitree.cz/ts-utils';
import type { ParseError } from 'jsonc-parser';
import { applyEdits, modify, parse, printParseErrorCode } from 'jsonc-parser';
import type { Object as ObjectType } from 'ts-toolbelt';

import { getExistingTsConfigPath } from './get-existing-ts-config-path.js';
import type { ProjectReference } from './get-references.js';
import type { SyncProjectReferencesTsConfigs, WorkspacePackageProps } from './types.js';

export interface UpdateTsConfigsProps extends WorkspacePackageProps {
  /**
   * List of workspace package references.
   */
  references: ProjectReference[];
  /**
   * List of configured TS config names to use for updating references.
   */
  tsConfigs: ObjectType.NonNullable<Required<SyncProjectReferencesTsConfigs>>;
}

const parseTsConfig = (tsConfigPath: string, text: string) => {
  const errors: ParseError[] = [];
  const tsConfigJson = parse(text, errors, { allowTrailingComma: true }) as unknown;
  if (errors.length > 0 || typeof tsConfigJson !== 'object' || tsConfigJson === null || Array.isArray(tsConfigJson)) {
    const details = errors.map(({ error, offset }) => `${printParseErrorCode(error)} at offset ${offset}`).join(', ');
    throw new Error(`Error parsing TS config file: ${tsConfigPath}${details ? ` (${details})` : ''}`);
  }
  return tsConfigJson as { references?: unknown };
};

/**
 * Updates references in all configured TS configs, preserving comments and formatting.
 * Returns list of TS config paths whose references changed.
 * Throws if any TS config can't be read or parsed.
 */
export const updateTsConfigs = async ({ references, tsConfigs, workspacePackage }: UpdateTsConfigsProps) => {
  const entries = Object.entries(tsConfigs) as [keyof typeof tsConfigs, string][];
  const paths = await Promise.all(
    entries.map(async ([configType, configFile]) => {
      const tsConfigPath = await getExistingTsConfigPath({
        tsConfig: configFile,
        workspacePackage,
      });
      if (!tsConfigPath) return;

      const text = await readFile(tsConfigPath, 'utf8');
      const tsConfigJson = parseTsConfig(tsConfigPath, text);
      const nextReferences = references.map(
        (reference) => reference[configType] ?? reference.build ?? reference.default,
      );
      if (JSON.stringify(tsConfigJson.references) === JSON.stringify(nextReferences)) return;

      // Only the `references` value is replaced (compact, like `JSON.stringify`); the `afterSync` formatter lays it out.
      await writeFile(tsConfigPath, applyEdits(text, modify(text, ['references'], nextReferences, {})));
      return tsConfigPath;
    }),
  );

  return paths.filter(notNil);
};
