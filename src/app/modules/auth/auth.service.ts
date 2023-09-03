import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const findByEmail = async (email: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

export const AuthService = {
  findByEmail,
};
