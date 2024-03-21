import { readFile, writeFile } from 'node:fs/promises';

import { notNil } from '@apitree.cz/ts-utils';
import type { Object as ObjectType } from 'ts-toolbelt';

import { getExistingTsConfigPath } from './get-existing-ts-config-path.js';
import type { getReferences } from './get-references.js';
import type { SyncProjectReferencesTsConfigs, WorkspacePackageProps } from './types.js';

export interface UpdateTsConfigsProps extends WorkspacePackageProps {
  /**
   * List of workspace package references.
   */
  references: Awaited<ReturnType<typeof getReferences>>;
  /**
   * List of configured TS config names to use for updating references.
   */
  tsConfigs: ObjectType.NonNullable<Required<SyncProjectReferencesTsConfigs>>;
}

/**
 * Updates references in all configured TS configs. Returns list of updated TS config paths.
 */
export const updateTsConfigs = async ({ references, tsConfigs, workspacePackage }: UpdateTsConfigsProps) => {
  const entries = Object.entries(tsConfigs) as [keyof typeof tsConfigs, string][];
  const paths = await Promise.all(
    entries.map(async ([configType, configFile]) => {
      const tsConfigPath = await getExistingTsConfigPath({
        tsConfig: configFile,
        workspacePackage,
      });
      if (tsConfigPath) {
        const tsConfigJson = JSON.parse(await readFile(tsConfigPath, 'utf8')) as {
          references?: { path: string }[];
        };
        tsConfigJson.references = references.map(
          (reference) => reference[configType] ?? reference.build ?? reference.default,
        );
        await writeFile(tsConfigPath, JSON.stringify(tsConfigJson).replaceAll('\r\n', '\n'));
        return tsConfigPath;
      }
    }),
  );
  return paths.filter(notNil);
};
