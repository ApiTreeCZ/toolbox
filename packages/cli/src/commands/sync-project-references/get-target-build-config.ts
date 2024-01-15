import { access } from 'node:fs/promises';
import { join } from 'node:path';

import type { Object } from 'ts-toolbelt';

import { findPackageRoot } from './find-package-root.js';
import type { SyncProjectReferencesTsConfigs } from './types.js';

export interface GetTargetBuildConfigProps {
  /**
   * Workspace directory (e.g. `./packages`).
   */
  directory: string;
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
  /**
   * Package name (e.g. `cli`).
   */
  workspacePackage: string;
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
  try {
    const root = await findPackageRoot();
    const tsConfig = join(
      workspacePackage,
      type === 'module' ? tsConfigs.esmBuild : tsConfigs.cjsBuild,
    );
    await access(join(root, directory, tsConfig));
    return tsConfig;
  } catch {
    return join(workspacePackage, tsConfigs.build);
  }
};
