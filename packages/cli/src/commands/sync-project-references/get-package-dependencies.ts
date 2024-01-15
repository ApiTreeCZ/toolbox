import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { Object as ObjectType } from 'ts-toolbelt';

import { getRoot } from './get-root.js';
import type {
  SyncProjectReferencesConfig,
  WorkspacePackageProps,
} from './types.js';

export type GetPackageDependenciesProps = ObjectType.NonNullable<
  Pick<Required<SyncProjectReferencesConfig>, 'scopes'>
> &
  WorkspacePackageProps;

/**
 * Returns object containing package type and list of its internal (scoped) dependencies.
 */
export const getPackageDependencies = async ({
  directory,
  scopes,
  workspacePackage,
}: GetPackageDependenciesProps) => {
  const {
    dependencies = {},
    devDependencies = {},
    type = 'module',
  } = JSON.parse(
    await readFile(
      join(getRoot(), directory, workspacePackage, 'package.json'),
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
    ].filter((dependency) =>
      scopes.some((scope) => dependency.startsWith(scope)),
    ),
  };
};
