import express from 'express';
import { validateRequest } from '../../middlewears/validateRequest';
import { academicFacultyController } from './academicFaculty.controller';
import { FacultyValidations } from './academicFaculty.validation';

const router = express.Router();

router.post('/create-academic-faculty', validateRequest(FacultyValidations.createAcademicFacultyValidationSchema), academicFacultyController.createAcademicFaculty)
router.get('/', academicFacultyController.getAllAcademicFaculty)
router.get('/:facultyId', academicFacultyController.getSingleAcademicFaculty)
router.patch('/:facultyId', validateRequest(FacultyValidations.updateAcademicFacultyValidationSchema), academicFacultyController.updateAcademicFaculty)


export const AcademicFacultyRoute = router