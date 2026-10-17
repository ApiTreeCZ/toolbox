import path from 'node:path';

import { logger } from '../../utils.js';

import type { GetConfigProps } from './get-config.js';
import { getConfig } from './get-config.js';
import { getReferences } from './get-references.js';
import { getWorkspaces } from './get-workspaces.js';
import { runHooks } from './run-hooks.js';
import { updateTsConfigs } from './update-ts-configs.js';

export type ActionProps = Pick<GetConfigProps, 'config'>;

export const action = async ({ config }: ActionProps) => {
  const { workspaces, rootDir } = await getWorkspaces();
  const { hooks, tsConfigs } = await getConfig({ config, rootDir });
  const sync = workspaces.flatMap(async (workspacePackage) => {
    logger.info(`Syncing project references for ./${path.relative(rootDir, workspacePackage.dir)}`);
    return updateTsConfigs({
      references: await getReferences({
        tsConfigs,
        workspacePackage,
        workspaces,
      }),
      tsConfigs,
      workspacePackage,
    });
  });
  if (sync.length === 0) {
    logger.warn('No project references to sync.');
    return;
  }
  const paths = (await Promise.all(sync)).flat();
  if (paths.length === 0) {
    logger.info('Project references are up to date.');
    return;
  }
  await runHooks(hooks, paths);
};
