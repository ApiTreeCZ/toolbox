import { join, relative } from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';
import type { Package } from '@manypkg/get-packages';

import type { GetTargetBuildConfigProps } from './get-target-build-config.js';
import { getTargetBuildConfig } from './get-target-build-config.js';
import { getWorkspaceDependencies } from './get-workspace-dependencies.js';

export interface GetReferencesProps extends Pick<GetTargetBuildConfigProps, 'tsConfigs'> {
  /**
   * Workspace package to check and update references for.
   */
  workspacePackage: Package;
  /**
   * List of workspaces to search for package references.
   */
  workspaces: Package[];
}

/**
 * Returns list of package references to be added to its TS config.
 */
export const getReferences = async ({ tsConfigs, workspacePackage, workspaces }: GetReferencesProps) => {
  const { dependencies, type } = await getWorkspaceDependencies({ workspacePackage, workspaces });
  const references = await Promise.all(
    dependencies.map(async (dependency) => {
      const workspace = workspaces.find(({ packageJson }) => packageJson.name === dependency);
      if (workspace) {
        const buildConfig = await getTargetBuildConfig({
          tsConfigs,
          type,
          workspacePackage: workspace,
        });
        return {
          path: join(relative(workspacePackage.dir, workspace.dir), buildConfig),
        };
      }
    }),
  );
  return references.filter(notNil).sort((a, b) => a.path.localeCompare(b.path));
};
