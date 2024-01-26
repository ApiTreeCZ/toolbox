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
  runner?: 'npx' | 'pnpm' | 'yarn' | undefined;
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
  cjs?: string | undefined;
  /**
   * Name of the TS config file for ESM build (ambient modules only).
   * @defaultValue `'tsconfig.esm.build.json'`
   */
  esm?: string | undefined;
}

export interface SyncProjectReferencesConfig {
  /**
   * Custom hooks to run as parts of the sync process.
   */
  hooks?: SyncProjectReferencesHooks | undefined;
  /**
   * Packages scope to use for the project.
   * @defaultValue `['@apitree.cz']`
   */
  scopes?: string[] | undefined;
  /**
   * Custom names for TS config files.
   */
  tsConfigs?: SyncProjectReferencesTsConfigs | undefined;
}

export interface WorkspacePackageProps {
  /**
   * Workspace root directory (e.g. `./packages`).
   */
  directory: string;
  /**
   * Workspace package name (e.g. `cli`).
   */
  workspacePackage: string;
}
