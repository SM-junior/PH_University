import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyToDb = async (payload: TAcademicFaculty) => {
    const result = await AcademicFaculty.create(payload);
    return result
}

const getAllAcademicFacultiesFromDb = async () => {
    const result = await AcademicFaculty.find();
    return result
}

const getSingleAcademicFacultiesFromDb = async (id: string) => {
    const result = await AcademicFaculty.findById(id);
    return result
}

const updateAcademicFacultyIntoDb = async (id: string, payload: Partial<TAcademicFaculty>) => {
    const result = await AcademicFaculty.findByIdAndUpdate({ _id: id }, payload, { new: true })
    return result
}


export const academicFacultyService = {
    createAcademicFacultyToDb,
    getAllAcademicFacultiesFromDb,
    getSingleAcademicFacultiesFromDb,
    updateAcademicFacultyIntoDb
}