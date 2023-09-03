import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { IUserGet } from './user.interface';

const insertIntoDB = async (user: User): Promise<User> => {
  const result = await prisma.user.create({
    data: user,
  });
  return result;
};

const getAllUsers = async (): Promise<IUserGet[]> => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        contactNo: true,
        address: true,
        profileImg: true,
      },
    });
    return users;
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

export const UserService = {
  insertIntoDB,
  getAllUsers,
};
