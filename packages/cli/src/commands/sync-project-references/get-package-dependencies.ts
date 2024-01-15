import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { Object as ObjectType } from 'ts-toolbelt';

import { PACKAGE_JSON } from './constants.js';
import { getRoot } from './get-root.js';
import type {
  SyncProjectReferencesConfig,
  WorkspacePackageProps,
} from './types.js';

export type GetPackageDependenciesProps = ObjectType.NonNullable<
  Pick<Required<SyncProjectReferencesConfig>, 'scope'>
> &
  WorkspacePackageProps;

/**
 * Returns object containing package type and list of its internal (scoped) dependencies.
 */
export const getPackageDependencies = async ({
  directory,
  scope,
  workspacePackage,
}: GetPackageDependenciesProps) => {
  const {
    dependencies = {},
    devDependencies = {},
    type = 'module',
  } = JSON.parse(
    await readFile(
      join(getRoot(), directory, workspacePackage, PACKAGE_JSON),
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
