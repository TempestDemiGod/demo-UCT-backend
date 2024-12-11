import {Schema, model} from 'mongoose'

const reportSchema = new Schema(
    {
        observacion: {
            type: String,
            required: true
        },
        idAula : {
            type: Schema.Types.ObjectId,
            ref: 'Aula',
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default model('Report', reportSchema)