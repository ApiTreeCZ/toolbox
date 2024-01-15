import { Option } from 'commander';

import { DEFAULT_CONFIG } from './constants.js';

export const config = new Option(
  '-c --config <config>',
  'path to config file',
).default(DEFAULT_CONFIG);
