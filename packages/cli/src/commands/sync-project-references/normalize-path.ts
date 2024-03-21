/**
 * Normalize path to use forward slashes on all platforms.
 */
export const normalizePath = (path: string) => path.replaceAll('\\', '/');
