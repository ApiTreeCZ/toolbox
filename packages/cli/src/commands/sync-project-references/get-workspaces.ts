import { getPackages } from '@manypkg/get-packages';

/**
 * Returns list of workspaces and their root directory.
 */
export const getWorkspaces = async () => {
  const { packages: workspaces, rootDir } = await getPackages(process.cwd());
  return { workspaces, rootDir };
};
