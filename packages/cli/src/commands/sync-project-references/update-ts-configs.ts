import { readFile, writeFile } from 'node:fs/promises';

import { notNil } from '@apitree.cz/ts-utils';

import { getExistingTsConfigPath } from './get-existing-ts-config-path.js';
import type { getReferences } from './get-references.js';

export interface UpdateTsConfigsProps {
  /**
   * Workspace root directory (e.g. `./packages`).
   */
  directory: string;
  /**
   * Workspace package name (e.g. `cli`).
   */
  workspacePackage: string;
  /**
   * List of workspace package references.
   */
  references: Awaited<ReturnType<typeof getReferences>>;
  /**
   * List of configured TS config names to use for updating references.
   */
  tsConfigs: string[];
}

/**
 * Updates references in all configured TS configs. Returns list of updated TS config paths.
 */
export const updateTsConfigs = async ({
  directory,
  references,
  tsConfigs,
  workspacePackage,
}: UpdateTsConfigsProps) => {
  const paths = await Promise.all(
    tsConfigs.map(async (tsConfig) => {
      const tsConfigPath = await getExistingTsConfigPath({
        directory,
        tsConfig,
        workspacePackage,
      });
      if (tsConfigPath) {
        const tsConfigJson = JSON.parse(
          await readFile(tsConfigPath, 'utf8'),
        ) as { references?: typeof references };
        tsConfigJson.references = references;
        await writeFile(tsConfigPath, JSON.stringify(tsConfigJson));
        return tsConfigPath;
      }
    }),
  );
  return paths.filter(notNil);
};
