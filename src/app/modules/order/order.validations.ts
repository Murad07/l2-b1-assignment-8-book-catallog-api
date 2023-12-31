import { z } from 'zod';

const create = z.object({
  body: z.object({
    userId: z.string().optional(),
    orderedBooks: z.array(
      z.object({
        bookId: z.string(),
        quantity: z.number().int(),
      })
    ),
  }),
});

export const OrderValidation = {
  create,
};
