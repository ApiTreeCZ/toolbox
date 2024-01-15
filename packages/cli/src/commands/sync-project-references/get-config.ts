import { join, isAbsolute } from 'node:path';

import deepmerge from 'deepmerge';
import { pathExists } from 'path-exists';

import defaultConfig from './default-config.js';
import { getRoot } from './get-root.js';

const getConfigPath = (path: string) =>
  isAbsolute(path) ? path : join(getRoot(), path);

/**
 * Returns config object from a provided path.
 * If the config file does not exist, returns default config.
 */
export const getConfig = async (path: string) => {
  const configPath = getConfigPath(path);
  if (await pathExists(configPath)) {
    const config = (await import(configPath)) as typeof defaultConfig;
    return deepmerge(defaultConfig, config);
  }
  return defaultConfig;
};
