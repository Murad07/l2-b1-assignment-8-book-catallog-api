import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from '../user/user.controller';
import { UserValidation } from '../user/user.validations';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);

export const authRoutes = router;
