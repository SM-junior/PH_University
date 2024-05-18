import { StudentModel } from "../student.model";
import { Student } from "./students.interface";


const createStudentIntoDb=async(student:Student)=>{
    const result= await StudentModel.create(student);
    return result;
}

const getAllStudentFromDb=async()=>{
    const result=StudentModel.find();
    return result;
}
const getSingleStudentFromDb=async(id:string)=>{
    const result=StudentModel.find({id});
    return result;
}

export const StudentServices={
    createStudentIntoDb,
    getAllStudentFromDb,
    getSingleStudentFromDb
    
}
