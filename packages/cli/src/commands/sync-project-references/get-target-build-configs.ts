import path from 'node:path';

import { pathExists } from 'path-exists';
import type { Object } from 'ts-toolbelt';

import type { SyncProjectReferencesTsConfigs, WorkspacePackageProps } from './types.js';

export interface GetTargetBuildConfigProps extends WorkspacePackageProps {
  /**
   * Configured package TS config names.
   */
  tsConfigs: Object.NonNullable<Required<SyncProjectReferencesTsConfigs>>;
}

/**
 * Returns target TS build config path relative to workspace root.
 */
export const getTargetBuildConfigs = async ({ tsConfigs, workspacePackage: { dir } }: GetTargetBuildConfigProps) => {
  const buildPath = path.join(dir, tsConfigs.build);
  return {
    default: tsConfigs.default,
    build: (await pathExists(buildPath)) ? tsConfigs.build : undefined,
  };
};
