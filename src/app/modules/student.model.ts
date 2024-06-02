

import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, StudentModel, TUserName } from "./students/students.interface";

import config from "../config";

const userNameSchema = new Schema<TUserName>(
    {
        firstName: {
            type: String,
            trim: true,
            required: [true, 'firstName is required'],
            maxLength: [20, 'firstName can not be more than 20 characters']
        },
        middleName: {
            type: String,
            trim: true,
            required: [true, 'middleName is required'],
            maxLength: [20, 'firstName can not be more than 20 characters']
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, 'lastName is required'],
            maxLength: [20, 'firstName can not be more than 20 characters']
        }
    }
)

const guardianSchema = new Schema<
    TGuardian>(
        {
            fatherName: {
                type: String,
                required: [true, 'fatherName is required']
            },
            fatherOccupation: {
                type: String,
                required: [true, 'fatherOccupation is required']
            },
            fatherContactNo: {
                type: String,
                required: [true, 'fatherContact is required']
            },
            motherName: {
                type: String,
                required: [true, 'motherName is required']
            },
            motherOccupation: {
                type: String,
                required: [true, 'motherOccupation is required']
            },
            motherContactNo: {
                type: String,
                required: [true, 'motherContactNo is required']
            },
        }
    )

const localGuardianSchema = new Schema<TLocalGuardian>(
    {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNo: { type: String, required: true },
        address: { type: String, required: true }
    }
)

const StudentSchema = new Schema<TStudent, StudentModel>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User id is required"],
        unique: true,
        ref: 'User'
    },
    name: {
        type: userNameSchema,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'others'],
        },
        required: true
    },
    dateOfBirth: { type: String },
    contactNo: { type: String },
    email: {
        type: String,
        required: [true, 'email must be required'],
    },
    emergencyContactNo: { String },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"]
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImg: { type: String },
    admissionSemester: {
        type: Schema.Types.ObjectId,
        ref: "AcademicSemester"
    },
})



//creating a custom static method
StudentSchema.statics.isUserExists = async function (id: string) {
    const existingUser = await Student.findOne({ id });
    return existingUser
}
export const Student = model<TStudent, StudentModel>('Student', StudentSchema);