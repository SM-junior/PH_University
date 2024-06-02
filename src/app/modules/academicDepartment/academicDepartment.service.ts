
import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


const createAcademicDepartmentToDb = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result
}

const getAllAcademicDepartmentFromDb = async () => {
    const result = await AcademicDepartment.find();
    return result
}

const getSingleAcademicDepartmentFromDb = async (id: string) => {
    const result = await AcademicDepartment.findById(id);
    return result
}

const updateAcademicDepartmentIntoDb = async (id: string, payload: Partial<TAcademicDepartment>) => {
    const result = await AcademicDepartment.findByIdAndUpdate({ _id: id }, payload, { new: true })
    return result
}


export const academicDepartmentService = {
    createAcademicDepartmentToDb,
    getAllAcademicDepartmentFromDb,
    getSingleAcademicDepartmentFromDb,
    updateAcademicDepartmentIntoDb
}