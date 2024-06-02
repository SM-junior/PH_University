import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { academicDepartmentService } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const result = await academicDepartmentService.createAcademicDepartmentToDb(req.body)
    res.status(200).json({
        success: true,
        message: "Academic Department is created successfully",
        data: result
    })
})

const getAllAcademicDepartment = async (req: Request, res: Response) => {
    try {
        const result = await academicDepartmentService.getAllAcademicDepartmentFromDb();
        res.status(200).json({
            success: true,
            message: "All academic Department retrieved successfully",
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

const getSingleAcademicDepartment = async (req: Request, res: Response) => {
    try {
        const { departmentId } = req.params;
        const result = await academicDepartmentService.getSingleAcademicDepartmentFromDb(departmentId);
        res.status(200).json({
            success: true,
            message: "Academic Department retrieved successfully",
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

const updateAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result = await academicDepartmentService.updateAcademicDepartmentIntoDb(departmentId, req.body)
    res.json({
        success: true,
        message: "Academic Department updated successfully!",
        data: result,
    });
})

export const academicDepartmentController = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}