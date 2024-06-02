import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { UserServices } from "./user.services";


const createStudent = catchAsync(async (req, res) => {
    const { password, student: StudentData } = req.body;
    const result = await UserServices.createStudentIntoDb(password, StudentData)
    res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data: result
    })
})

export const UserController = {
    createStudent
}