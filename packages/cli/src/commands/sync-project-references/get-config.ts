import { access } from 'node:fs/promises';
import { join, isAbsolute } from 'node:path';

import deepmerge from 'deepmerge';

import defaultConfig from './config.js';
import { findPackageRoot } from './find-package-root.js';

const configExists = async (path: string) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const getConfigPath = async (path: string) =>
  isAbsolute(path) ? path : join(await findPackageRoot(), path);

/**
 * Returns config object from a provided path.
 * If the config file does not exist, returns default config.
 */
export const getConfig = async (path: string) => {
  const configPath = await getConfigPath(path);
  if (await configExists(configPath)) {
    const config = (await import(configPath)) as typeof defaultConfig;
    return deepmerge(defaultConfig, config);
  }
  return defaultConfig;
};
