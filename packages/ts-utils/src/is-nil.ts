/**
 * Checks if value IS `null` or `undefined`. Works as a type guard.
 */
export const isNil = (value: unknown): value is null | undefined => value == null;
