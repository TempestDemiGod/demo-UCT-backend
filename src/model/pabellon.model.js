import { Schema, model } from "mongoose";

const pabellonSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default model("Pabellon", pabellonSchema)