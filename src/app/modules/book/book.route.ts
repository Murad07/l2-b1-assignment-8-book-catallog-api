import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validations';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.insertIntoDB
);
// router.get('/', CategoryController.getAllCategories);
// router.get('/:id', CategoryController.getSilgleCategory);
// router.patch(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   CategoryController.updateCategory
// );
// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   CategoryController.deleteCategory
// );

export const bookRoutes = router;
