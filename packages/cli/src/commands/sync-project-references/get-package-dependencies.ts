import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { findPackageRoot } from './find-package-root.js';

export interface GetPackageDependenciesProps {
  /**
   * Workspace root directory (e.g. `./packages`).
   */
  directory: string;
  /**
   * Resolved packages scope (e.g. `@apitree.cz`).
   */
  scope: string;
  /**
   * Workspace package name (e.g. `cli`).
   */
  workspacePackage: string;
}

/**
 * Returns object containing package type and list of its internal (scoped) dependencies.
 */
export const getPackageDependencies = async ({
  directory,
  scope,
  workspacePackage,
}: GetPackageDependenciesProps) => {
  const root = await findPackageRoot();
  const {
    dependencies = {},
    devDependencies = {},
    type = 'module',
  } = JSON.parse(
    await readFile(
      join(root, directory, workspacePackage, 'package.json'),
      'utf8',
    ),
  ) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    type?: string;
  };
  return {
    type,
    dependencies: [
      ...Object.keys(dependencies),
      ...Object.keys(devDependencies),
    ].filter((dependency) => dependency.startsWith(scope)),
  };
};
