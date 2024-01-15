import { Command } from 'commander';

import { action } from './action.js';
import { config } from './options.js';

export const command = new Command('sync-project-references')
  .description('sync TS project references in monorepo')
  .addOption(config)
  .action(action);
