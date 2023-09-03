import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id, name, email, password, role, contactNo, address, profileImg } =
    req.body;

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of bcrypt rounds

  // Create a user object with the hashed password
  const userData = {
    id,
    name,
    email,
    password: hashedPassword,
    role,
    contactNo,
    address,
    profileImg,
  };

  const result = await UserService.insertIntoDB(userData);

  //   const result = await UserService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  });
});

export const UserController = {
  insertIntoDB,
};
