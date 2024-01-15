import { packageDirectory } from 'pkg-dir';

/**
 * Find the root directory of the package. Defaults to `process.cwd()`.
 */
export const findPackageRoot = async () => {
  const directory = await packageDirectory();
  if (directory) {
    return directory;
  }
  return process.cwd();
};
