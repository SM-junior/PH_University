import { Student } from "../student.model";

const getAllStudentFromDb = async () => {
    const result = Student.find();
    return result;
}
const getSingleStudentFromDb = async (id: string) => {
    const result = Student.find({ id });
    return result;
}

export const StudentServices = {
    getAllStudentFromDb,
    getSingleStudentFromDb

}
