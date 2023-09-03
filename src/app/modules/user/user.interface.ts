import { User as PrismaUser } from '@prisma/client';

export type IUserGet = {
  id: PrismaUser['id'];
  name: PrismaUser['name'];
  email: PrismaUser['email'];
  role: PrismaUser['role'];
  contactNo: PrismaUser['contactNo'];
  address: PrismaUser['address'];
  profileImg: PrismaUser['profileImg'];
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  contactNo: string;
  address: string;
  profileImg: string;
};
