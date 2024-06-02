import config from "../../config";
import { TStudent } from "../students/students.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { Student } from '../student.model';
import { generateStudentId } from './user.utils';
import { AcademicSemester } from '../academicSemester/academicSemester.model';


const createStudentIntoDb = async (password: string, payload: TStudent) => {

    //create a user object
    const userData: Partial<TUser> = {}

    //if password is not given, use default password
    userData.password = password || (config.default_pass as string);

    //set student role
    userData.role = 'student';

    //find academic semester info
    const admissionSemester = await AcademicSemester.findById(payload.admissionSemester)
    //manually generated id
    userData.id = await generateStudentId(admissionSemester);

    //create a user
    const newUser = await User.create(userData);

    //create a student
    if (Object.keys(newUser).length) {
        //set id ,-id as user
        payload.id = newUser.id, //embed id
            payload.user = newUser._id //reference id

        const newStudent = await Student.create(payload);
        return newStudent;
    }

}

export const UserServices = {
    createStudentIntoDb,
}