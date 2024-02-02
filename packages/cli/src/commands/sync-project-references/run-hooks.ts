import childProcess from 'node:child_process';
import { promisify } from 'node:util';

import type { Object } from 'ts-toolbelt';

import type { SyncProjectReferencesHooks } from './types.js';

const exec = promisify(childProcess.exec);

export const runHooks = async (hooks: Object.NonNullable<Required<SyncProjectReferencesHooks>>, paths: string[]) => {
  const { afterSync, runner } = hooks;
  await Promise.all(afterSync.map((hook) => exec(`${runner} ${hook} ${paths.join(' ')}`)));
};
