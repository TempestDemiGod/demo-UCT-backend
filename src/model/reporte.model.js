import {Schema, model} from 'mongoose'
import { optional } from 'zod'

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
        },
        fecha : {
            type: String
        },
        hora : {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export default model('Report', reportSchema)