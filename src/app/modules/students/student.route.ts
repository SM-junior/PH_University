
import express from "express"
import { StudentController } from './student.controller';

const router = express.Router()

router.get('/', StudentController.getAllStudent);

router.get('/:studentId', StudentController.getSingleStudent)



export const StudentRoute = router