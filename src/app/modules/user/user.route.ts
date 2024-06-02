
import express from 'express';
import { validateRequest } from '../../middlewears/validateRequest';
import { studentValidations } from '../studentZodValidationSchema';
import { UserController } from './user.controller';
const router = express.Router()

router.post('/create-student', validateRequest(studentValidations.createStudentValidationSchema), UserController.createStudent)

export const UserRoute = router;