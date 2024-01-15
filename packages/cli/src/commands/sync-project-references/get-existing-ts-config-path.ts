import { access } from 'node:fs/promises';
import { join } from 'node:path';

import { findPackageRoot } from './find-package-root.js';

export interface GetExistingTsConfigPathProps {
  /**
   * Workspace root directory (e.g. `./packages`).
   */
  directory: string;
  /**
   * TS config file name (e.g. `tsconfig.json`).
   */
  tsConfig: string;
  /**
   * Package name (e.g. `cli`).
   */
  workspacePackage: string;
}

/**
 * Returns path to TS config file of a provided name if it exists.
 */
export const getExistingTsConfigPath = async ({
  directory,
  tsConfig,
  workspacePackage,
}: GetExistingTsConfigPathProps) => {
  const root = await findPackageRoot();
  const path = join(root, directory, workspacePackage, tsConfig);
  try {
    await access(path);
    return path;
  } catch {
    return null;
  }
};
