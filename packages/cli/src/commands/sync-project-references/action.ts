import { logger } from '../../utils.js';

import type { GetConfigProps } from './get-config.js';
import { getConfig } from './get-config.js';
import { getReferences } from './get-references.js';
import { getWorkspaceDependencies } from './get-workspace-dependencies.js';
import { getWorkspaces } from './get-workspaces.js';
import { runHooks } from './run-hooks.js';
import { updateTsConfigs } from './update-ts-configs.js';

export type ActionProps = Pick<GetConfigProps, 'config'>;

export const action = async ({ config }: ActionProps) => {
  const { workspaces, rootDir } = await getWorkspaces();
  const { hooks, tsConfigs } = await getConfig({ config, rootDir });
  const sync = workspaces.flatMap(async (workspacePackage) =>
    updateTsConfigs({
      references: await getReferences({
        tsConfigs,
        workspacePackage,
        workspaces,
        workspaceDependencies: await getWorkspaceDependencies({ workspacePackage, workspaces }),
      }),
      tsConfigs: Object.values(tsConfigs),
      workspacePackage,
    }),
  );
  if (sync.length === 0) {
    return logger.warn('No project references to sync.');
  }
  const paths = await Promise.all(sync);
  await runHooks(hooks, paths.flat());
};
