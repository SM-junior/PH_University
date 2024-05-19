

import { Schema,model } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./students/students.interface";

const userNameSchema=new Schema<UserName>(
    {
        firstName:{
            type:String,
            trim:true,
            required:[true, 'firstName is required'],
            maxLength:[20, 'firstName can not be more than 20 characters']
        },
        middleName:{
            type:String,
            trim:true,
            required:[true, 'middleName is required'],
            maxLength:[20, 'firstName can not be more than 20 characters']
        },
        lastName:{
            type:String,
            trim:true,
            required:[true, 'lastName is required'],
            maxLength:[20, 'firstName can not be more than 20 characters']
        }
    }
)

const guardianSchema=new Schema<
Guardian>(
    {
        fatherName:{
            type:String,
             required:[true, 'fatherName is required']
        },
        fatherOccupation:{
            type:String, 
            required:[true, 'fatherOccupation is required']
        },
        fatherContactNo:{
            type:String, 
            required:[true, 'fatherContact is required']
        },
        motherName:{
            type:String, 
            required:[true, 'motherName is required']
        },
        motherOccupation:{
            type:String, 
            required:[true, 'motherOccupation is required']
        },
        motherContactNo:{
            type:String, 
            required:[true, 'motherContactNo is required']
        },
    }
)

const localGuardianSchema=new Schema<LocalGuardian>(
    {
        name:{type:String, required:true},
        occupation:{type:String, required:true},
        contactNo:{type:String, required:true},
        address:{type:String, required:true}
    }
)

const StudentSchema=new Schema <Student>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:userNameSchema,
        required:true
    },
    gender:{
        type:String,
        enum:{
            values:['male','female','others'],
            message:'{VALUE} is an incorrect value'
        },
        required:true
    },
    dateOfBirth:{type:String},
    contactNo:{type:String},
    email:{
        type:String,
         required:[true, 'email must be required'],
        },
    emergencyContactNo:{String},
    bloodGroup:{
        type:String,
        enum:["A+","A-","AB+","AB-","B+","B-","O+","O-"]
    },
    presentAddress:{type:String, required:true},
    permanentAddress:{type:String, required:true},
    guardian:{
        type:guardianSchema,
        required:true
    },
    localGuardian:{
        type:localGuardianSchema,
        required:true
    },
    profileImg:{type:String},
    isActive:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    }

})

export const StudentModel = model<Student>('Student', StudentSchema);