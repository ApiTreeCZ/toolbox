import type { Package } from '@manypkg/get-packages';

export interface SyncProjectReferencesHooks {
  /**
   * Hook called after the project references are synced.
   * @defaultValue `['prettier --write']`
   */
  afterSync?: string[] | undefined;
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
   * Custom names for TS config files.
   */
  tsConfigs?: SyncProjectReferencesTsConfigs | undefined;
}

export interface WorkspacePackageProps {
  /**
   * Workspace package.
   */
  workspacePackage: Package;
}
