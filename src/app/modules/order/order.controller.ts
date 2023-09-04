// import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { userId, orderedBooks } = req.body;
  const result = await OrderService.insertIntoDB(userId, orderedBooks);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders fetched successfully',
    data: result,
  });
});

// const getSilgleOrder = catchAsync(async (req: Request, res: Response) => {
//   const page = parseInt(req.query.page as string) || 1;
//   const size = parseInt(req.query.size as string) || 10;

//   const id = req.params.id;

//   const resultB = await OrderService.getSilgleOrder(id);

//   if (!resultB) {
//     const resultC = await OrderService.getOrderByCategory({
//       id,
//       page,
//       size,
//     });

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Orders with associated category data fetched successfully',
//       meta: resultC.meta,
//       data: resultC.data,
//     });
//   } else {
//     sendResponse<Order>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Order fetched successfully',
//       data: resultB,
//     });
//   }
// });

// const updateOrder = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const payload = req.body;
//   const result = await OrderService.updateOrder(id, payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Order updated successfully',
//     data: result,
//   });
// });

// const deleteOrder = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await OrderService.deleteOrder(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Order deleted successfully',
//     data: result,
//   });
// });

export const OrderController = {
  insertIntoDB,
  getAllOrders,
  //   getSilgleOrder,
  //   updateOrder,
  //   deleteOrder,
};
