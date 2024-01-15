export interface SyncProjectReferencesHooks {
  /**
   * Hook called after the project references are synced.
   * @defaultValue `['prettier --write']`
   */
  afterSync?: string[] | undefined;
  /**
   * Package manager runner to use for running the hooks.
   * @defaultValue `'pnpm'`
   */
  runner?: 'npx' | 'pnpm' | 'yarn';
}

export interface SyncProjectReferencesTsConfigs {
  /**
   * Name of the main TS config file.
   * @defaultValue `'tsconfig.json'`
   */
  default?: string | undefined;
  /**
   * Name of the TS config file for build.
   * @defaultValue `'tsconfig.build.json'`
   */
  build?: string | undefined;
  /**
   * Name of the TS config file for CJS build (ambient modules only).
   * @defaultValue `'tsconfig.cjs.build.json'`
   */
  cjsBuild?: string | undefined;
  /**
   * Name of the TS config file for ESM build (ambient modules only).
   * @defaultValue `'tsconfig.esm.build.json'`
   */
  esmBuild?: string | undefined;
}

export interface SyncProjectReferencesConfig {
  /**
   * Packages scope to use for the project.
   * @defaultValue `'@apitree.cz'`
   */
  scope?: string | undefined;
  /**
   * Custom hooks to run as parts of the sync process.
   */
  hooks?: SyncProjectReferencesHooks | undefined;
  /**
   * Custom names for TS config files.
   */
  tsConfigs?: SyncProjectReferencesTsConfigs | undefined;
}
