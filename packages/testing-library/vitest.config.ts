import { config } from '@apitree/vitest-config/react';
import { mergeConfig } from 'vitest/config';
import type { UserConfig } from 'vitest/config';

export default mergeConfig<UserConfig, UserConfig>(config, {
  test: {
    setupFiles: ['tests/setup.ts'],
  },
});
