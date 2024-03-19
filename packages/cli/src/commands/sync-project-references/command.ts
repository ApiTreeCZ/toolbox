import { Command } from '@commander-js/extra-typings';

import { run } from '../../utils.js';

import { config } from './options.js';

export const command = new Command('sync-project-references')
  .description('sync TS project references in monorepo')
  .addOption(config)
  .action(async ({ config }) => {
    const { action } = await import('./action.js');
    await run(action({ config }));
  });
