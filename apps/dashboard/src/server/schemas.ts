import { z } from 'zod';

export const pagination = z.object({
  page: z.number(),
  pageSize: z.number(),
});

export const sorting = z.object({
  column: z.string(),
  direction: z.enum(['asc', 'desc']),
});
