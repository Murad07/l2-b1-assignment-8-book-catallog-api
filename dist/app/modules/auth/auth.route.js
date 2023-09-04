"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("../user/user.controller");
const user_validations_1 = require("../user/user.validations");
const auth_controller_1 = require("./auth.controller");
const auth_validations_1 = require("./auth.validations");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(user_validations_1.UserValidation.create), user_controller_1.UserController.insertIntoDB);
router.post('/login', (0, validateRequest_1.default)(auth_validations_1.AuthValidation.loginZodSchema), auth_controller_1.AuthController.loginUser);
exports.authRoutes = router;
