import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { Package } from '@manypkg/get-packages';

import type { WorkspacePackageProps } from './types.js';

export interface GetPackageDependenciesProps extends WorkspacePackageProps {
  /**
   * List of workspaces to search for package dependencies.
   */
  workspaces: Package[];
}

/**
 * Returns object containing package type and list of its internal (scoped) dependencies.
 */
export const getWorkspaceDependencies = async ({ workspacePackage, workspaces }: GetPackageDependenciesProps) => {
  const {
    dependencies = {},
    devDependencies = {},
    type = 'module',
  } = JSON.parse(await readFile(join(workspacePackage.dir, 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    type?: string;
  };
  return {
    type,
    dependencies: [...Object.keys(dependencies), ...Object.keys(devDependencies)].filter((dependency) =>
      workspaces.some(({ packageJson }) => packageJson.name === dependency),
    ),
  };
};
