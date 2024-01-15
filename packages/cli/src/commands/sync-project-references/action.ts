import { getConfig } from './get-config.js';
import { getPackageDependencies } from './get-package-dependencies.js';
import { getReferences } from './get-references.js';
import { getWorkspaces } from './get-workspaces.js';
import { runHooks } from './run-hooks.js';
import { updateTsConfigs } from './update-ts-configs.js';

export interface ActionOptions {
  /**
   * Path to config file (e.g. `./sync-project-references.config.js`).
   */
  config: string;
  /**
   * Packages scope (e.g. `@apitree.cz`).
   */
  scope: string;
}

export const action = async (options: ActionOptions) => {
  console.log('apitree-cli → sync-project-references');
  const config = await getConfig(options.config);
  const workspaces = await getWorkspaces();
  const sync = workspaces.flatMap(({ directory, packages }) =>
    packages.map(async (workspacePackage) => {
      console.log(
        `Syncing project references for ${directory}/${workspacePackage}`,
      );
      const otherWorkspaces = workspaces.map(({ directory, packages }) => ({
        directory,
        packages: packages.filter(
          (otherPackage) => otherPackage !== workspacePackage,
        ),
      }));
      const packageDependencies = await getPackageDependencies({
        directory,
        workspacePackage,
        scope: config.scope,
      });
      return updateTsConfigs({
        directory,
        references: await getReferences({
          directory,
          otherWorkspaces,
          packageDependencies,
          scope: config.scope,
          tsConfigs: config.tsConfigs,
        }),
        tsConfigs: Object.values(config.tsConfigs),
        workspacePackage,
      });
    }),
  );
  const paths = await Promise.all(sync);
  await runHooks(config.hooks, paths.flat());
};
