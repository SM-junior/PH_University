
import express from 'express';
import { validateRequest } from '../../middlewears/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema), AcademicSemesterController.createAcademicSemester)

router.get('/', AcademicSemesterController.getAllAcademicSemester);
router.get('/:semesterId', AcademicSemesterController.getSingleAcademicSemester);

router.patch("/:semesterId", validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema), AcademicSemesterController.updateAcademicSemester);

export const AcademicSemesterRoute = router;