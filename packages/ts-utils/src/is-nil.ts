/**
 * Checks if value IS `null` or `undefined`. Works as a type guard.
 */
export const isNil = <T>(value: T | null | undefined): value is null | undefined => value == null;
