// import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
// import { StudentController } from './student.controller';
// import { StudentValidation } from './student.validations';
// import { UserValidation } from './user.validations';

// const router = express.Router();

// router.get('/',
//     StudentController.getAllFromDB);

// router.get('/:id', StudentController.getByIdFromDB);

// router.post(
//     '/',
//     auth(ENUM_USER_ROLE.ADMIN),
//     validateRequest(UserValidation.create),
//     StudentController.insertIntoDB
// );

// router.patch(
//     '/:id',
//     auth(ENUM_USER_ROLE.ADMIN),
//     validateRequest(StudentValidation.update),
//     StudentController.updateIntoDB)

// router.delete(
//     '/:id',
//     auth(ENUM_USER_ROLE.ADMIN),
//     StudentController.deleteFromDB);

// export const studentRoutes = router;
