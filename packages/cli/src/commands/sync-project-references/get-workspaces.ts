import type { Dirent } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';
import { pathExists } from 'path-exists';

import { PACKAGE_JSON } from './constants.js';
import { getRoot } from './get-root.js';

const getValidPackages = async (dirents: Dirent[]) => {
  const names = await Promise.all(
    dirents.map(async (dirent) => {
      if (await pathExists(join(dirent.path, PACKAGE_JSON))) {
        return dirent.name;
      }
    }),
  );
  return names.filter(notNil);
};

/**
 * Returns list of workspaces with their root directory (e.g. `./packages`) and workspace folder names.
 */
export const getWorkspaces = async () => {
  const root = getRoot();
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
        packages: await getValidPackages(packages),
      };
    }),
  );
};
