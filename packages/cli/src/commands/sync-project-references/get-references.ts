import path from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';
import type { Package } from '@manypkg/get-packages';

import type { GetTargetBuildConfigProps } from './get-target-build-configs.js';
import { getTargetBuildConfigs } from './get-target-build-configs.js';
import { getWorkspaceDependencies } from './get-workspace-dependencies.js';
import { normalizePath } from './normalize-path.js';

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
  const { dependencies } = await getWorkspaceDependencies({ workspacePackage, workspaces });
  const references = await Promise.all(
    dependencies.map(async (dependency) => {
      const workspace = workspaces.find(({ packageJson }) => packageJson.name === dependency);
      if (workspace) {
        const { default: defaultConfig, build: buildConfig } = await getTargetBuildConfigs({
          tsConfigs,
          workspacePackage: workspace,
        });
        return {
          default: {
            path: normalizePath(
              path.join(path.relative(workspacePackage.dir, workspace.dir), buildConfig ?? defaultConfig),
            ),
          },
          build: buildConfig
            ? { path: normalizePath(path.join(path.relative(workspacePackage.dir, workspace.dir), buildConfig)) }
            : undefined,
          lib: undefined,
        };
      }
    }),
  );
  return references.filter(notNil).sort((a, b) => a.default.path.localeCompare(b.default.path));
};
