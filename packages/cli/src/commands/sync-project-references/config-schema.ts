import { z } from 'zod';

import type { SyncProjectReferencesConfig } from './types.js';

export const configSchema = z.object({
  hooks: z
    .object({
      afterSync: z.array(z.string()).optional(),
      runner: z.enum(['npx', 'pnpm', 'yarn']).optional(),
    })
    .optional(),
  scopes: z.array(z.string()).optional(),
  tsConfigs: z
    .object({
      build: z.string().optional(),
      cjs: z.string().optional(),
      default: z.string().optional(),
      esm: z.string().optional(),
    })
    .optional(),
}) satisfies z.ZodType<SyncProjectReferencesConfig>;
