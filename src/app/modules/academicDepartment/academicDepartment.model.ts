
import { Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';
import { model } from 'mongoose';

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    academicDepartment: {
        type: Schema.Types.ObjectId,
        ref: 'academicFaulty'
    }
},
    {
        timestamps: true
    })


academicDepartmentSchema.pre('save', async function (next) {
    const isDepartmentExist = await AcademicDepartment.findOne({ name: this.name });
    if (isDepartmentExist) {
        throw new Error("Academic department is already exists")
    }
    next()
})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
    const query = this.getQuery();
    const isDepartmentExist = await AcademicDepartment.findOne(query)
    if (!isDepartmentExist) {
        throw new Error('Academic department is not exist')
    }
})

export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema)
