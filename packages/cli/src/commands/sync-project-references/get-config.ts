import { join, isAbsolute } from 'node:path';

import { isNil } from '@apitree.cz/ts-utils';
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
    const config = (await import(configPath)) as {
      default?: typeof defaultConfig;
    };
    if (isNil(config.default)) {
      throw new Error(`Config '${configPath}' does not have a default export.`);
    }
    return deepmerge(defaultConfig, config.default, {
      arrayMerge: (_, source: unknown[]) => source,
    });
  }
  return defaultConfig;
};
