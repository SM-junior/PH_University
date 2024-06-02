import { AcademicSemester } from "./academicSemester.model";
import { academicSemesterNameCodeMapper } from "./academicSemester.const";
import { TAcademicSemester, TAcademicSemesterNameCodeMapper } from "./AcademicSemester.interface";

const createAcademicSemesterToD = async (payload: TAcademicSemester) => {
    //semester name -->semester code

    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code')
    }

    const result = await AcademicSemester.create(payload);
    return result
}


const getAllAcademicSemesterFromDb = async () => {
    const result = await AcademicSemester.find()
    return result
}

const getSingleAcademicSemesterFromDb = async (semesterId: string) => {
    const result = await AcademicSemester.findOne({ _id: semesterId });
    return result;
};

const updateAcademicSemesterToDb = async (id: string, payload: Partial<TAcademicSemester>,) => {
    if (
        payload.name &&
        payload.code &&
        academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code')
    }
    const result = await AcademicSemester.findByIdAndUpdate({ _id: id }, payload, { new: true })
    return result
}


export const AcademicSemesterServices = {
    createAcademicSemesterToD,
    getAllAcademicSemesterFromDb,
    getSingleAcademicSemesterFromDb,
    updateAcademicSemesterToDb
}