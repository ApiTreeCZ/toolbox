import type { SyncProjectReferencesConfig } from './types.js';

const defaultConfig = {
  tsConfigs: {
    default: 'tsconfig.json',
    build: 'tsconfig.build.json',
    cjs: 'tsconfig.cjs.build.json',
    esm: 'tsconfig.esm.build.json',
  },
  hooks: {
    afterSync: ['prettier --write'],
  },
} satisfies SyncProjectReferencesConfig;

export default defaultConfig;
