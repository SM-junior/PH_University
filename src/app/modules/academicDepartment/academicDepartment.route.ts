import express from 'express';
import { validateRequest } from '../../middlewears/validateRequest';
import { academicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidations } from './academicDepartment.validation';

const router = express.Router();

router.post('/create-academic-department', validateRequest(AcademicDepartmentValidations.createAcademicDepartmentValidationSchema), academicDepartmentController.createAcademicDepartment)
router.get('/', academicDepartmentController.getAllAcademicDepartment)
router.get('/:departmentId', academicDepartmentController.getSingleAcademicDepartment)
router.patch('/:departmentId', validateRequest(AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema), academicDepartmentController.updateAcademicDepartment)


export const AcademicDepartmentRoute = router