import { Book, Prisma } from '@prisma/client';
import { IGenericResponse } from '../../../interfaces/common';
import prisma from '../../../shared/prisma';
import { GetBooksParams } from './book.interface';

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const getAllBooks = async (
  params: GetBooksParams
): Promise<IGenericResponse<Book[]>> => {
  const {
    page = 1,
    size = 3,
    sortBy,
    sortOrder,
    minPrice,
    maxPrice,
    category,
    search,
  } = params;

  // Create the Prisma query builder
  const query: Prisma.BookFindManyArgs = {
    skip: (page - 1) * size,
    take: size,
    include: {
      category: true,
    },
    orderBy: {
      [sortBy || 'publicationDate']: sortOrder || 'desc',
    },
    where: {},
  };

  if (minPrice !== undefined) {
    query.where = {
      ...query.where,
      price: {
        gte: minPrice,
      },
    };
  }

  if (maxPrice !== undefined) {
    query.where = {
      ...query.where,
      price: {
        lte: maxPrice,
      },
    };
  }

  if (category) {
    query.where = {
      ...query.where,
      categoryId: category,
    };
  }

  if (search) {
    query.where = {
      ...query.where,
      OR: [
        {
          title: {
            contains: search,
            mode: 'insensitive', // Case-insensitive search
          },
        },
        {
          author: {
            contains: search,
            mode: 'insensitive', // Case-insensitive search
          },
        },
        {
          genre: {
            contains: search,
            mode: 'insensitive', // Case-insensitive search
          },
        },
      ],
    };
  }

  const [data, total] = await Promise.all([
    prisma.book.findMany(query),
    prisma.book.count({ where: query.where }),
  ]);

  const totalPage = Math.ceil(total / size);
  return {
    meta: {
      page,
      size,
      total,
      totalPage,
    },
    data: data,
  };
};

const getSilgleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookService = {
  insertIntoDB,
  getAllBooks,
  getSilgleBook,
  updateBook,
  deleteBook,
};
