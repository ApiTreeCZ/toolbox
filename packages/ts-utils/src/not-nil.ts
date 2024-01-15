import { isNil } from './is-nil.js';

/**
 * Checks if value IS NOT `null` or `undefined`. Works as a type guard.
 */
export const notNil = <T>(type: T): type is NonNullable<T> => !isNil(type);
