import { JsonValue } from '@prisma/client/runtime/library';

export type IOrder = {
  id: string;
  userId?: string;
  orderedBooks: JsonValue;
  status: string;
  createdAt: Date;
};
