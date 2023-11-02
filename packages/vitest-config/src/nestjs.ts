import swc from 'unplugin-swc';
import type { UserConfig } from 'vitest/config';
import { mergeConfig } from 'vitest/config';

import { base } from './base.js';

export const config = mergeConfig<UserConfig, UserConfig>(base, {
  plugins: [swc.vite({ module: { type: 'es6' } })],
});
