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
exports.OrderService = void 0;
// import { IGenericResponse } from '../../../interfaces/common';
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertIntoDB = (userId, orderedBooks) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data: {
            userId,
            orderedBooks,
            status: 'pending',
        },
    });
    return result;
});
const getAllOrders = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let result = null;
    if (userId) {
        result = yield prisma_1.default.order.findMany({
            where: {
                userId,
            },
        });
    }
    else {
        result = yield prisma_1.default.order.findMany();
    }
    return result;
});
const getSilgleOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id,
        },
    });
    return result;
});
exports.OrderService = {
    insertIntoDB,
    getAllOrders,
    getSilgleOrder,
};
