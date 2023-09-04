"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return result;
});
const getAllBooks = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, size = 10, sortBy, sortOrder, minPrice, maxPrice, category, search, } = params;
    // Create the Prisma query builder
    const query = {
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
        query.where = Object.assign(Object.assign({}, query.where), { price: {
                gte: minPrice,
            } });
    }
    if (maxPrice !== undefined) {
        query.where = Object.assign(Object.assign({}, query.where), { price: {
                lte: maxPrice,
            } });
    }
    if (category) {
        query.where = Object.assign(Object.assign({}, query.where), { categoryId: category });
    }
    if (search) {
        query.where = Object.assign(Object.assign({}, query.where), { OR: [
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
            ] });
    }
    const [data, total] = yield Promise.all([
        prisma_1.default.book.findMany(query),
        prisma_1.default.book.count({ where: query.where }),
    ]);
    const totalPage = Math.ceil(total / size);
    return {
        meta: {
            page,
            size,
            total,
            totalPage,
        },
        data,
    };
});
const getBookByCategory = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, page = 1, size = 10 } = params;
    const query = {
        skip: (page - 1) * size,
        take: size,
        include: {
            category: true,
        },
        where: { categoryId: id },
    };
    const [data, total] = yield Promise.all([
        prisma_1.default.book.findMany(query),
        prisma_1.default.book.count({ where: query.where }),
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
});
const getSilgleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.BookService = {
    insertIntoDB,
    getAllBooks,
    getSilgleBook,
    updateBook,
    deleteBook,
    getBookByCategory,
};
