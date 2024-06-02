import { z } from "zod";


// Define Zod schema for UserName
const userNameValidationSchema = z.object({
    firstName: z.string().max(20).min(1),
    middleName: z.string().max(20).min(1),
    lastName: z.string().max(20).min(1),
});

// Define Zod schema for Guardian
const GuardianValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
});

// Define Zod schema for LocalGuardian
const LocalGuardianValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
});

// Define Zod schema for Student
const createStudentValidationSchema = z.object({
    body: z.object({
        password: z.string(),
        student: z.object({
            name: userNameValidationSchema,
            gender: z.enum(["male", "female", "others"]),
            dateOfBirth: z.string(),
            contactNo: z.string(),
            email: z.string().email(),
            emergencyContactNo: z.string(),
            bloodGroup: z.enum(["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"]).optional(),
            presentAddress: z.string(),
            permanentAddress: z.string(),
            guardian: GuardianValidationSchema,
            localGuardian: LocalGuardianValidationSchema,
            profileImg: z.string().optional(),
            admissionSemester: z.string(),
        })
    })
})

export const studentValidations = {
    createStudentValidationSchema
}