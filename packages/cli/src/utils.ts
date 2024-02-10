import childProcess from 'node:child_process';
import { promisify } from 'node:util';

import { program } from '@commander-js/extra-typings';

export const exec = promisify(childProcess.exec);

/* eslint-disable no-console */
export const logger = {
  info: console.info,
  warn: console.warn,
};
/* eslint-enable no-console */

export const run = async (action: Promise<void>) => {
  try {
    await action;
  } catch (error) {
    program.error(String(error));
  }
};
