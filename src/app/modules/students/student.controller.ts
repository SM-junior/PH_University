import { Request, Response } from "express";
import Joi from "joi";
import { StudentServices } from './student.service';



const userNameSchema = Joi.object({
    firstName: Joi.string().trim().required().max(20).messages({
        'string.base': 'firstName must be a string',
        'string.empty': 'firstName is required',
        'string.max': 'firstName cannot be more than {#limit} characters'
    }),
    middleName: Joi.string().trim().required().max(20).messages({
        'string.base': 'middleName must be a string',
        'string.empty': 'middleName is required',
        'string.max': 'middleName cannot be more than {#limit} characters'
    }),
    lastName: Joi.string().trim().required().max(20).messages({
        'string.base': 'lastName must be a string',
        'string.empty': 'lastName is required',
        'string.max': 'lastName cannot be more than {#limit} characters'
    })
});

// Define Joi schema for guardian
const guardianSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        'string.empty': 'fatherName is required'
    }),
    fatherOccupation: Joi.string().required().messages({
        'string.empty': 'fatherOccupation is required'
    }),
    fatherContactNo: Joi.string().required().messages({
        'string.empty': 'fatherContactNo is required'
    }),
    motherName: Joi.string().required().messages({
        'string.empty': 'motherName is required'
    }),
    motherOccupation: Joi.string().required().messages({
        'string.empty': 'motherOccupation is required'
    }),
    motherContactNo: Joi.string().required().messages({
        'string.empty': 'motherContactNo is required'
    })
});

// Define Joi schema for localGuardian
const localGuardianSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'name is required'
    }),
    occupation: Joi.string().required().messages({
        'string.empty': 'occupation is required'
    }),
    contactNo: Joi.string().required().messages({
        'string.empty': 'contactNo is required'
    }),
    address: Joi.string().required().messages({
        'string.empty': 'address is required'
    })
});

// Define Joi schema for Student
const studentSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameSchema.required(),
    gender: Joi.string().valid('male', 'female', 'others').required(),
    dateOfBirth: Joi.string(),
    contactNo: Joi.string(),
    email: Joi.string().required().messages({
        'string.empty': 'email is required'
    }),
    emergencyContactNo: Joi.string(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'),
    presentAddress: Joi.string().required().messages({
        'string.empty': 'presentAddress is required'
    }),
    permanentAddress: Joi.string().required().messages({
        'string.empty': 'permanentAddress is required'
    }),
    guardian: guardianSchema.required(),
    localGuardian: localGuardianSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'inactive').default('active')
});


const createStudent=async(req:Request, res:Response)=>{
    try {
        const {student:StudentData}=req.body;
        const {error, value}=studentSchema.validate(StudentData)
        console.log(error, value);


    //will call service function send this data
    const result=await StudentServices.createStudentIntoDb(StudentData)
    res.status(200).json({
        success:true,
        message:'Student is created successfully',
        data:result
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong',
            error:error
        })
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
