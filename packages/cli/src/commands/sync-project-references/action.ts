import { logger } from '../../utils.js';

import type { GetConfigProps } from './get-config.js';
import { getConfig } from './get-config.js';
import { getPackageDependencies } from './get-package-dependencies.js';
import { getReferences } from './get-references.js';
import { getWorkspaces } from './get-workspaces.js';
import { runHooks } from './run-hooks.js';
import { updateTsConfigs } from './update-ts-configs.js';

export type ActionProps = GetConfigProps;

export const action = async (props: ActionProps) => {
  const config = await getConfig(props);
  const workspaces = await getWorkspaces(config.scopes);
  const sync = workspaces.flatMap(({ directory, packages }) =>
    packages.map(async (workspacePackage) => {
      logger.info(`Syncing project references for ${directory}/${workspacePackage}`);
      const otherWorkspaces = workspaces.map(({ directory, packages }) => ({
        directory,
        packages: packages.filter((otherPackage) => otherPackage !== workspacePackage),
      }));
      const packageDependencies = await getPackageDependencies({
        directory,
        workspacePackage,
        scopes: config.scopes,
      });
      return updateTsConfigs({
        directory,
        references: await getReferences({
          directory,
          otherWorkspaces,
          packageDependencies,
          scopes: config.scopes,
          tsConfigs: config.tsConfigs,
        }),
        tsConfigs: Object.values(config.tsConfigs),
        workspacePackage,
      });
    }),
  );
  if (sync.length === 0) {
    return logger.warn('No project references to sync.');
  }
  const paths = await Promise.all(sync);
  await runHooks(config.hooks, paths.flat());
};
