import swc from 'unplugin-swc';
import type { UserConfig } from 'vitest/config';
import { mergeConfig } from 'vitest/config';

import { base } from './base.js';

export const nestjs: UserConfig = mergeConfig(base, {
  plugins: [swc.vite({ module: { type: 'es6' } })],
} satisfies UserConfig);
