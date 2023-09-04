import { Book } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookService } from './book.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const size = parseInt(req.query.size as string) || 10;
  const sortBy = req.query.sortBy as string | undefined;
  const sortOrder = req.query.sortOrder as 'asc' | 'desc' | undefined;
  const minPrice = parseFloat(req.query.minPrice as string) || undefined;
  const maxPrice = parseFloat(req.query.maxPrice as string) || undefined;
  const category = req.query.category as string | undefined;
  const search = req.query.search as string | undefined;

  const result = await BookService.getAllBooks({
    page,
    size,
    sortBy,
    sortOrder,
    minPrice,
    maxPrice,
    category,
    search,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSilgleBook = catchAsync(async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const size = parseInt(req.query.size as string) || 10;

  const id = req.params.id;

  const resultB = await BookService.getSilgleBook(id);

  if (!resultB) {
    const resultC = await BookService.getBookByCategory({
      id,
      page,
      size,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books with associated category data fetched successfully',
      meta: resultC.meta,
      data: resultC.data,
    });
  } else {
    sendResponse<Book>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully',
      data: resultB,
    });
  }
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookService.updateBook(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.deleteBook(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  insertIntoDB,
  getAllBooks,
  getSilgleBook,
  updateBook,
  deleteBook,
};
