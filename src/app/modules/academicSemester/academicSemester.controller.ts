import { Request, Response } from "express";
import { AcademicSemesterServices } from './academicSemester.service';
import { catchAsync } from '../utils/catchAsync';


const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterToD(req.body)

    res.status(200).json({
        success: true,
        message: "Academic semester is created successfully",
        data: result,
    });
});


const getAllAcademicSemester = async (req: Request, res: Response) => {
    try {
        const result = await AcademicSemesterServices.getAllAcademicSemesterFromDb();
        res.status(200).json({
            success: true,
            message: "All semester fetched successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Item not found",
            error: error
        });
    }
}

const getSingleAcademicSemester = async (req: Request, res: Response) => {
    try {
        const { semesterId } = req.params;
        const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDb(semesterId);
        res.status(200).json({
            success: true,
            message: "Semester fetched successfully!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
        });
    }
};

const updateAcademicSemester = catchAsync(async (req, res) => {
    const { semesterId } = req.params;
    const result = await AcademicSemesterServices.updateAcademicSemesterToDb(semesterId, req.body)
    res.json({
        success: true,
        message: "Semester updated successfully!",
        data: result,
    });
})

export const AcademicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester

}