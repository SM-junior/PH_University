
import { Model, Types } from 'mongoose';

interface User {
  name: string;
  email: string;
  avatar?: string;
}

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string
}


export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string
}

export type TStudent = {
  id: string;
  user: Types.ObjectId
  password: string,
  name: TUserName;
  gender: "male" | "female" | "others";
  dateOfBirth: string;
  contactNo: string;
  email: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "AB+" | "AB-" | "B+" | "B-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  admissionSemester: Types.ObjectId;
}

//for creating  static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}






//for creating instance
  // export type StudentMethods={
  //   isUserExists(id:string):Promise<TStudent | null>
  // }

  // export type StudentModel = Model<TStudent, {}, StudentMethods>;