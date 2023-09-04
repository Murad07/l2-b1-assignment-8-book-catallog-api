import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './order.controller';
import { OrderValidation } from './order.validations';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(OrderValidation.create),
  OrderController.insertIntoDB
);
router.get('/', OrderController.getAllOrders);
// router.get('/:id', OrderController.getSilgleOrder);
// router.patch(
//   '/:id',
//   auth(ENUM_USER_ROLE.ADMIN),
//   validateRequest(OrderValidation.update),
//   OrderController.updateOrder
// );
// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), OrderController.deleteOrder);

export const orderRoutes = router;