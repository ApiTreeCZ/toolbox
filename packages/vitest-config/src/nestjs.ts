import swc from 'unplugin-swc';
import type { ViteUserConfig } from 'vitest/config';
import { mergeConfig } from 'vitest/config';

import { base } from './base.js';

export const nestjs: ViteUserConfig = mergeConfig(base, {
  plugins: [swc.vite({ module: { type: 'es6' } })],
} satisfies ViteUserConfig);
