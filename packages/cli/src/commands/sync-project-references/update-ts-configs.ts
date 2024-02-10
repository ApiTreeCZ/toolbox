import { readFile, writeFile } from 'node:fs/promises';

import { notNil } from '@apitree.cz/ts-utils';

import { getExistingTsConfigPath } from './get-existing-ts-config-path.js';
import type { getReferences } from './get-references.js';
import type { WorkspacePackageProps } from './types.js';

export interface UpdateTsConfigsProps extends WorkspacePackageProps {
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
export const updateTsConfigs = async ({ references, tsConfigs, workspacePackage }: UpdateTsConfigsProps) => {
  const paths = await Promise.all(
    tsConfigs.map(async (tsConfig) => {
      const tsConfigPath = await getExistingTsConfigPath({
        tsConfig,
        workspacePackage,
      });
      if (tsConfigPath) {
        const tsConfigJson = JSON.parse(await readFile(tsConfigPath, 'utf8')) as { references?: typeof references };
        tsConfigJson.references = references;
        await writeFile(tsConfigPath, JSON.stringify(tsConfigJson));
        return tsConfigPath;
      }
    }),
  );
  return paths.filter(notNil);
};
