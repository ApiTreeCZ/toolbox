import type { SyncProjectReferencesConfig } from './types.js';

const defaultConfig = {
  tsConfigs: {
    default: 'tsconfig.json',
    build: 'tsconfig.build.json',
    lib: 'tsconfig.lib.json',
  },
  hooks: {
    afterSync: ['prettier --write'],
  },
} satisfies SyncProjectReferencesConfig;

export default defaultConfig;
