import Joi from "joi";


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
    email: Joi.string().email().required(),
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


export default userNameSchema