// import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
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

const getSilgleOrder = catchAsync(async (req: Request, res: Response) => {
  // identify the user role
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;

  verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);

  req.user = verifiedUser; // role  , userid
  //   console.log('mm : ' + JSON.stringify(req.user));
  const userRole = req.user.role;
  const userId = req.user.userId;

  const id = req.params.id;

  const result = await OrderService.getSilgleOrder(id);

  if (userRole === 'customer' && result?.userId !== userId) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully',
    data: result,
  });
});

export const OrderController = {
  insertIntoDB,
  getAllOrders,
  getSilgleOrder,
};
