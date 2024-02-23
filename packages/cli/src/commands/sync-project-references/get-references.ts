import { join, relative } from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';
import type { Package } from '@manypkg/get-packages';

import type { GetTargetBuildConfigProps } from './get-target-build-configs.js';
import { getTargetBuildConfigs } from './get-target-build-configs.js';
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
        const {
          default: defaultConfig,
          build: buildConfig,
          esm: esmConfig,
          cjs: cjsConfig,
        } = await getTargetBuildConfigs({
          tsConfigs,
          workspacePackage: workspace,
        });
        const getBuildConfig = () => {
          if (type === 'module') {
            return esmConfig ?? buildConfig;
          }
          return cjsConfig ?? buildConfig;
        };
        const build = getBuildConfig();
        return {
          default: { path: join(relative(workspacePackage.dir, workspace.dir), build ?? defaultConfig) },
          build: build ? { path: join(relative(workspacePackage.dir, workspace.dir), build) } : undefined,
          cjs: cjsConfig ? { path: join(relative(workspacePackage.dir, workspace.dir), cjsConfig) } : undefined,
          esm: esmConfig ? { path: join(relative(workspacePackage.dir, workspace.dir), esmConfig) } : undefined,
        };
      }
    }),
  );
  return references.filter(notNil).sort((a, b) => a.default.path.localeCompare(b.default.path));
};
