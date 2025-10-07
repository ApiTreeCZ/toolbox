import { findRoot } from '@manypkg/find-root';
import { execa } from 'execa';
import type { Object } from 'ts-toolbelt';

import type { SyncProjectReferencesHooks } from './types.js';

export const runHooks = async (hooks: Object.NonNullable<Required<SyncProjectReferencesHooks>>, paths: string[]) => {
  const { tool } = await findRoot(process.cwd());
  const { afterSync } = hooks;

  await Promise.all(afterSync.map((hook) => execa(tool, [...hook.split(' '), ...paths])));
};
