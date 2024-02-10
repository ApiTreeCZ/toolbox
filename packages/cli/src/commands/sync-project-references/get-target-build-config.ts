import { basename, join } from 'node:path';

import { pathExists } from 'path-exists';
import type { Object } from 'ts-toolbelt';

import type { SyncProjectReferencesTsConfigs, WorkspacePackageProps } from './types.js';

export interface GetTargetBuildConfigProps extends WorkspacePackageProps {
  /**
   * Configured package TS config names.
   */
  tsConfigs: Object.NonNullable<Required<Omit<SyncProjectReferencesTsConfigs, 'default'>>>;
  /**
   * Package target type (e.g. `module`).
   */
  type: string;
}

/**
 * Returns target TS build config path relative to workspace root.
 */
export const getTargetBuildConfig = async ({
  type,
  tsConfigs,
  workspacePackage: { dir },
}: GetTargetBuildConfigProps) => {
  const workspaceName = basename(dir);
  const tsConfig = join(workspaceName, type === 'module' ? tsConfigs.esm : tsConfigs.cjs);
  if (await pathExists(join(dir, tsConfig))) {
    return tsConfig;
  }
  return join(workspaceName, tsConfigs.build);
};
