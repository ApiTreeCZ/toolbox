import { join } from 'node:path';

import { pathExists } from 'path-exists';
import type { Object } from 'ts-toolbelt';

import { getRoot } from './get-root.js';
import type {
  SyncProjectReferencesTsConfigs,
  WorkspacePackageProps,
} from './types.js';

export interface GetTargetBuildConfigProps extends WorkspacePackageProps {
  /**
   * Configured package TS config names.
   */
  tsConfigs: Object.NonNullable<
    Required<Omit<SyncProjectReferencesTsConfigs, 'default'>>
  >;
  /**
   * Package target type (e.g. `module`).
   */
  type: string;
}

/**
 * Returns target TS build config path relative to workspace root.
 */
export const getTargetBuildConfig = async ({
  directory,
  type,
  tsConfigs,
  workspacePackage,
}: GetTargetBuildConfigProps) => {
  const tsConfig = join(
    workspacePackage,
    type === 'module' ? tsConfigs.esm : tsConfigs.cjs,
  );
  if (await pathExists(join(getRoot(), directory, tsConfig))) {
    return tsConfig;
  }
  return join(workspacePackage, tsConfigs.build);
};
