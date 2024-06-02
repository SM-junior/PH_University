import { TAcademicSemester } from "../academicSemester/AcademicSemester.interface"
import { User } from "./user.model";

const findLastStudentId = async () => {
    const lastStudent = await User.findOne(
        {
            role: 'student'
        },
        {
            id: 1,
            _id: 0
        },
    ).sort({ createdAt: -1 }).lean()
    return lastStudent?.id ? lastStudent.id : undefined
}



//year semester code 4 digits number
export const generateStudentId = async (payload: TAcademicSemester) => {
    let currentId = (0).toString() //0000 by default

    const lastStudentId = await findLastStudentId();
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6)  //get semester code 
    const lastStudentYear = lastStudentId?.substring(0, 4)   //get year

    const currentSemesterCode = payload.code;
    const currentYear = payload.year;

    if (
        lastStudentId && lastStudentSemesterCode ===
        currentSemesterCode && lastStudentYear === currentYear
    ) {
        currentId = lastStudentId.substring(6)  //0001
    }

    // const currentId = (0).toString().padStart(4, '0');
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId
}