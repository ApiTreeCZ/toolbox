import { program } from '@commander-js/extra-typings';

/* eslint-disable no-console */
export const logger = {
  error: console.error,
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
