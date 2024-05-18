import { Request, Response } from "express";
import { StudentServices } from './student.service';


const createStudent=async(req:Request, res:Response)=>{
    try {
        const {student:StudentData}=req.body;
    //will call service function send this data
    const result=await StudentServices.createStudentIntoDb(StudentData)
    res.status(200).json({
        success:true,
        message:'Student is created successfully',
        data:result
    })
    } catch (error) {
        console.log(error);
    }
}

const getAllStudent=async(req:Request, res:Response)=>{
    try {
        const result=await StudentServices.getAllStudentFromDb();
        res.status(200).json({
            success:true,
            message:"all users are retrieve successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    } 
}
const getSingleStudent=async(req:Request, res:Response)=>{
    try {
        const {studentId}=req.params
        const result=await StudentServices.getSingleStudentFromDb(studentId);
        res.status(200).json({
            success:true,
            message:"all users are retrieve successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    } 
}

export const StudentController={
    createStudent,
    getAllStudent,
    getSingleStudent
    
}
