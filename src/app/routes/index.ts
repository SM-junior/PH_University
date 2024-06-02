
import express from 'express';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { StudentRoute } from '../modules/students/student.route';
import { UserRoute } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoute
    },
    {
        path: '/students',
        route: StudentRoute
    },
    {
        path: '/academic-semester',
        route: AcademicSemesterRoute
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRoute
    },
    {
        path: '/academic-departments',
        route: AcademicDepartmentRoute
    }
]


moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router;