import { Schema, model, connect } from 'mongoose';

interface User {
    name: string;
    email: string;
    avatar?: string;
  }

  export type UserName={
      firstName:string;
      middleName:string;
      lastName:string
  };
  
  export type Guardian={
        fatherName:string;
        fatherOccupation:string;
        fatherContactNo:string;
        motherName:string;
        motherOccupation:string;
        motherContactNo:string
  }


export type LocalGuardian={
    name:string;
    occupation:string;
    contactNo:string;
    address:string
}

  export type Student={
    id:string;
    name:UserName;
    gender:"male|female";
    dateOfBirth:string;
    contactNo:string;
    email:string;
    emergencyContactNo:string;
    bloodGroup?:"A+"|"A-"|"AB+"|"AB-"|"B+"|"B-"|"O+"|"O-";
    presentAddress:string;
    permanentAddress:string;
    guardian: Guardian;
    localGuardian:LocalGuardian;
    profileImg?:string;
    isActive:'active'|'inactive'
  }