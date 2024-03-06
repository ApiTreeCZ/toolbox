import type { Object } from 'ts-toolbelt';

import { exec } from '../../utils.js';
import type { SyncProjectReferencesHooks } from './types.js';

export const runHooks = async (hooks: Object.NonNullable<Required<SyncProjectReferencesHooks>>, paths: string[]) => {
  const { afterSync } = hooks;
  await Promise.all(afterSync.map((hook) => exec(`pnpm ${hook} ${paths.join(' ')}`)));
};
