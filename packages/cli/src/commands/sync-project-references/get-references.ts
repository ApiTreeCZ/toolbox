import { join } from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';

import type { getPackageDependencies } from './get-package-dependencies.js';
import type { GetTargetBuildConfigProps } from './get-target-build-config.js';
import { getTargetBuildConfig } from './get-target-build-config.js';
import type { getWorkspaces } from './get-workspaces.js';

export interface GetReferencesProps
  extends Pick<GetTargetBuildConfigProps, 'tsConfigs'> {
  /**
   * Workspace root directory (e.g. `./packages`).
   */
  directory: string;
  /**
   * Object containing package type and list of its internal (scoped) dependencies.
   */
  packageDependencies: Awaited<ReturnType<typeof getPackageDependencies>>;
  /**
   * List of filtered workspaces (without the one currently being processed).
   */
  otherWorkspaces: Awaited<ReturnType<typeof getWorkspaces>>;
  /**
   * Resolved packages scope (e.g. `@apitree.cz`).
   */
  scope: string;
}

/**
 * Returns list of package references to be added to its TS config.
 */
export const getReferences = async ({
  directory,
  packageDependencies: { dependencies, type },
  otherWorkspaces,
  scope,
  tsConfigs,
}: GetReferencesProps) => {
  const references = await Promise.all(
    dependencies.map(async (packageDependency) => {
      const workspacePackage = packageDependency.replace(`${scope}/`, '');
      const workspace = otherWorkspaces.find(({ packages }) =>
        packages.includes(workspacePackage),
      );
      if (workspace) {
        const buildConfig = await getTargetBuildConfig({
          directory: workspace.directory,
          tsConfigs,
          type,
          workspacePackage,
        });
        return {
          path: join(
            directory === workspace.directory
              ? '../'
              : `../../${workspace.directory}`,
            buildConfig,
          ),
        };
      }
    }),
  );
  return references.filter(notNil).sort((a, b) => a.path.localeCompare(b.path));
};
