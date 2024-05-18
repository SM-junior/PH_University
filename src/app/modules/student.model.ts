

import { Schema,model } from "mongoose";
import { Guardian, LocalGuardian, Student, UserName } from "./students/students.interface";

const userNameSchema=new Schema<UserName>(
    {
        firstName:{type:String, require:true},
        middleName:{type:String, require:true},
        lastName:{type:String, require:true}
    }
)

const guardianSchema=new Schema<Guardian>(
    {
        fatherName:{type:String, require:true},
        fatherOccupation:{type:String, require:true},
        fatherContactNo:{type:String, require:true},
        motherName:{type:String, require:true},
        motherOccupation:{type:String, require:true},
        motherContactNo:{type:String, require:true},
    }
)

const localGuardianSchema=new Schema<LocalGuardian>(
    {
        name:{type:String, require:true},
        occupation:{type:String, require:true},
        contactNo:{type:String, require:true},
        address:{type:String, require:true}
    }
)

const StudentSchema=new Schema <Student>({
    id:{type:String},
    name:userNameSchema,
    gender:['male','female'],
    dateOfBirth:{type:String},
    contactNo:{type:String},
    email:{type:String, required:true},
    emergencyContactNo:{String},
    bloodGroup:["A+","A-","AB+","AB-","B+","B-","O+","O-"],
    presentAddress:{type:String, require:true},
    permanentAddress:{type:String, require:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive:['active','inactive']

})

export const StudentModel = model<Student>('Student', StudentSchema);