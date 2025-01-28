import { z } from 'zod';

import type { SyncProjectReferencesConfig } from './types.js';

export const configSchema = z
  .object({
    hooks: z
      .object({
        afterSync: z.array(z.string()).optional(),
      })
      .optional(),
    tsConfigs: z
      .object({
        build: z.string().optional(),
        default: z.string().optional(),
      })
      .optional(),
  })
  .strict() satisfies z.ZodType<SyncProjectReferencesConfig>;
