import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { ICategory } from './category.interface';

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllCategories = async (): Promise<ICategory[]> => {
  const result = await prisma.category.findMany();
  return result;
};

const getSilgleCategory = async (id: string): Promise<ICategory | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllCategories,
  getSilgleCategory,
};
