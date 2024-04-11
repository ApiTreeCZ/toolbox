import path from 'node:path';

import { pathExists } from 'path-exists';

import type { WorkspacePackageProps } from './types.js';

export interface GetExistingTsConfigPathProps extends WorkspacePackageProps {
  /**
   * TS config file name (e.g. `tsconfig.json`).
   */
  tsConfig: string;
}

/**
 * Returns path to TS config file of a provided name if it exists.
 */
export const getExistingTsConfigPath = async ({ tsConfig, workspacePackage }: GetExistingTsConfigPathProps) => {
  const configPath = path.join(workspacePackage.dir, tsConfig);
  const exists = await pathExists(configPath);
  return exists ? configPath : undefined;
};
