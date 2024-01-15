import type { Dirent } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

import { notNil } from '@apitree.cz/ts-utils';
import { pathExists } from 'path-exists';

import { getRoot } from './get-root.js';

const getValidPackages = async (dirents: Dirent[], scopes: string[]) => {
  const names = await Promise.all(
    dirents.map(async (dirent) => {
      const packageJsonPath = join(dirent.path, dirent.name, 'package.json');
      if (await pathExists(packageJsonPath)) {
        const { name = '' } = JSON.parse(
          await readFile(packageJsonPath, 'utf8'),
        ) as {
          name?: string;
        };
        if (scopes.some((scope) => name.startsWith(scope))) {
          return name;
        }
      }
    }),
  );
  return names
    .filter(notNil)
    .map((name) =>
      name.replaceAll(new RegExp(`^(${scopes.join('|')})/`, 'g'), ''),
    );
};

/**
 * Returns list of workspaces with their root directory (e.g. `./packages`) and workspace folder names.
 */
export const getWorkspaces = async (scopes: string[]) => {
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
        packages: await getValidPackages(packages, scopes),
      };
    }),
  );
};
