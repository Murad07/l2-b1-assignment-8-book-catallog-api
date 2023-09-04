import { Order } from '@prisma/client';
// import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';
import { IOrder } from './order.interface';

const insertIntoDB = async (
  userId: string,
  orderedBooks: any
): Promise<Order> => {
  const result = await prisma.order.create({
    data: {
      userId,
      orderedBooks,
      status: 'pending',
    },
  });
  return result;
};

const getAllOrders = async (): Promise<IOrder[]> => {
  const result = await prisma.order.findMany();
  return result;
};

// const getSilgleOrder = async (id: string): Promise<Order | null> => {
//   const result = await prisma.order.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       category: true,
//     },
//   });
//   return result;
// };

// const updateOrder = async (
//   id: string,
//   payload: Partial<Order>
// ): Promise<Order> => {
//   const result = await prisma.order.update({
//     where: {
//       id,
//     },
//     data: payload,
//   });
//   return result;
// };

// const deleteOrder = async (id: string): Promise<Order> => {
//   const result = await prisma.order.delete({
//     where: {
//       id,
//     },
//   });
//   return result;
// };

export const OrderService = {
  insertIntoDB,
  getAllOrders,
  //   getSilgleOrder,
  //   updateOrder,
  //   deleteOrder,
  //   getOrderByCategory,
};
