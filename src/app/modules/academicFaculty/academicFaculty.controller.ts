import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { academicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await academicFacultyService.createAcademicFacultyToDb(req.body)
    res.status(200).json({
        success: true,
        message: "Academic Faculty is created successfully",
        data: result
    })
})

const getAllAcademicFaculty = async (req: Request, res: Response) => {
    try {
        const result = await academicFacultyService.getAllAcademicFacultiesFromDb();
        res.status(200).json({
            success: true,
            message: "All academic faculty retrieved successfully",
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

const getSingleAcademicFaculty = async (req: Request, res: Response) => {
    try {
        const { facultyId } = req.params;
        const result = await academicFacultyService.getSingleAcademicFacultiesFromDb(facultyId);
        res.status(200).json({
            success: true,
            message: "All academic faculty retrieved successfully",
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

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const result = await academicFacultyService.updateAcademicFacultyIntoDb(facultyId, req.body)
    res.json({
        success: true,
        message: "Academic faculty updated successfully!",
        data: result,
    });
})

export const academicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getSingleAcademicFaculty,
    updateAcademicFaculty
}