import { join, isAbsolute } from 'node:path';

import { isNil } from '@apitree.cz/ts-utils';
import deepmerge from 'deepmerge';
import { pathExists } from 'path-exists';

import defaultConfig from './default-config.js';
import { getRoot } from './get-root.js';

export interface GetConfigProps {
  /**
   * Path to config file (e.g. `./sync-project-references.config.js`).
   */
  config?: string | undefined;
}

const getConfigPath = ({ config }: GetConfigProps) => {
  if (config) {
    return isAbsolute(config) ? config : join(getRoot(), config);
  }
};

/**
 * Returns config object from a provided path.
 * If the config file does not exist, returns default config.
 */
export const getConfig = async (props: GetConfigProps) => {
  const configPath = getConfigPath(props);
  if (configPath) {
    if (await pathExists(configPath)) {
      const config = (await import(configPath)) as {
        default?: typeof defaultConfig;
      };
      if (isNil(config.default)) {
        throw new Error(
          `Config '${configPath}' does not have a default export.`,
        );
      }
      return deepmerge(defaultConfig, config.default, {
        arrayMerge: (_, source: unknown[]) => source,
      });
    }
    throw new Error(`Config '${configPath}' does not exist.`);
  }
  return defaultConfig;
};
