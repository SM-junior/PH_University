import { NextFunction, Request, RequestHandler, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { StudentServices } from './student.service';


const getAllStudent = catchAsync(async (req, res) => {
    const result = await StudentServices.getAllStudentFromDb();
    res.status(200).json({
        success: true,
        message: "all users are retrieve successfully",
        data: result
    })
})


const getSingleStudent = catchAsync(async (req, res) => {

    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
        success: true,
        message: "all users are retrieve successfully",
        data: result
    })
})

export const StudentController = {
    getAllStudent,
    getSingleStudent

}
