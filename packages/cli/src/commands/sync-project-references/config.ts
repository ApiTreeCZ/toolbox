import type { SyncProjectReferencesConfig } from './types.js';

const config = {
  scope: '@apitree.cz',
  tsConfigs: {
    default: 'tsconfig.json',
    build: 'tsconfig.build.json',
    cjsBuild: 'tsconfig.cjs.build.json',
    esmBuild: 'tsconfig.esm.build.json',
  },
  hooks: {
    afterSync: ['prettier --write'],
    runner: 'pnpm',
  },
} satisfies SyncProjectReferencesConfig;
export default config;
