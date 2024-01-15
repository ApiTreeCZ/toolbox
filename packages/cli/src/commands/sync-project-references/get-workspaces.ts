import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { findPackageRoot } from './find-package-root.js';

/**
 * Returns list of workspaces with their root directory (e.g. `./packages`) and workspace folder names.
 */
export const getWorkspaces = async () => {
  const root = await findPackageRoot();
  const packageJsonPath = join(root, 'package.json');
  const { workspaces = [] } = JSON.parse(
    await readFile(packageJsonPath, 'utf8'),
  ) as {
    workspaces: string[];
  };
  const directories = workspaces.map((workspace) =>
    workspace.replace('/*', ''),
  );
  return Promise.all(
    directories.map(async (directory) => {
      const packages = await readdir(join(root, directory), {
        encoding: 'utf8',
        recursive: false,
        withFileTypes: true,
      });
      return {
        directory,
        packages: packages
          .filter(
            (dirent) => dirent.isDirectory() && !dirent.name.startsWith('.'),
          )
          .map((dirent) => dirent.name),
      };
    }),
  );
};
