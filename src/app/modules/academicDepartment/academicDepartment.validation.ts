import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'name must be string',
            required_error: 'name must be required'
        }),
        academicDepartment: z.string({
            invalid_type_error: 'academic department must be string',
            required_error: 'academic department must be required'
        })
    })
})

const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: 'name must be string',
            required_error: 'name must be required'
        }).optional(),
        academicDepartment: z.string({
            invalid_type_error: 'academic department must be string',
            required_error: 'academic department must be required'
        }).optional()
    })
})

export const AcademicDepartmentValidations = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}