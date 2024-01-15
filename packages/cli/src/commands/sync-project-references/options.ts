import { Option } from 'commander';

export const config = new Option(
  '-c --config <config>',
  'path to config file',
).default('sync-project-references.config.js');
