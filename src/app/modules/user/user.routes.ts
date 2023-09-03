import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getAllUsers);

export const userRoutes = router;
