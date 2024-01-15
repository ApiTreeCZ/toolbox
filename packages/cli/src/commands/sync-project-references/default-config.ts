import type { SyncProjectReferencesConfig } from './types.js';

const defaultConfig = {
  scope: '@apitree.cz',
  tsConfigs: {
    default: 'tsconfig.json',
    build: 'tsconfig.build.json',
    cjs: 'tsconfig.cjs.build.json',
    esm: 'tsconfig.esm.build.json',
  },
  hooks: {
    afterSync: ['prettier --write'],
    runner: 'pnpm',
  },
} satisfies SyncProjectReferencesConfig;

export default defaultConfig;
