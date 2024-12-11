import { Schema , model } from "mongoose";

const aulaSchema = new Schema(
    {
        nAula : {
            type: Number,
            required: true
        },
        idPabellon: {
            type: Schema.Types.ObjectId,
            ref: 'Pabellon',
            required: true
        },
        piso: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export default model('Aula', aulaSchema)