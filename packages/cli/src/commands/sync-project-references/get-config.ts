import { join, isAbsolute } from 'node:path';

import { isNil } from '@apitree.cz/ts-utils';
import deepmerge from 'deepmerge';
import { pathExists } from 'path-exists';
import { ZodError } from 'zod';

import { configSchema } from './config-schema.js';
import * as defaultConfig from './default-config.js';

export interface GetConfigProps {
  /**
   * Path to config file (e.g. `./sync-project-references.config.js`).
   */
  config?: string | undefined;
  /**
   * Root directory to search for the config file.
   */
  rootDir: string;
}

const getPath = async ({ config, rootDir }: GetConfigProps) => {
  if (config) {
    const path = isAbsolute(config) ? config : join(rootDir, config);
    if (await pathExists(path)) {
      return path;
    }
    throw new Error(`Config '${path}' does not exist.`);
  }
  const fallback = join(rootDir, 'sync-project-references.config.js');
  if (await pathExists(fallback)) {
    return fallback;
  }
};

const validate = async (config: unknown, path: string) => {
  try {
    await configSchema.parseAsync(config);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new TypeError(
        `Config '${path}' is invalid:\n${error.errors
          .map((error) => `- ${error.path.join('.')}: ${error.message}`)
          .join('\n')}`,
      );
    }
    throw error;
  }
};

/**
 * Returns config object from a provided path.
 * If the config file does not exist, returns default config.
 */
export const getConfig = async (props: GetConfigProps) => {
  const path = await getPath(props);
  if (path) {
    const config = (await import(path)) as typeof defaultConfig;
    if (isNil(config.default)) {
      throw new Error(`Config '${path}' does not have a default export.`);
    }
    await validate(config.default, path);
    return deepmerge(defaultConfig.default, config.default, {
      arrayMerge: (_, source: unknown[]) => source,
    });
  }
  return defaultConfig.default;
};
