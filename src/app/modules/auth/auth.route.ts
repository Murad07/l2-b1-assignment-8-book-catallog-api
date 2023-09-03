import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from '../user/user.controller';
import { UserValidation } from '../user/user.validations';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validations';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

export const authRoutes = router;
