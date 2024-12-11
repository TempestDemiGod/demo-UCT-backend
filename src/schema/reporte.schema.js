import {z} from 'zod'

export const reporteSchema = z.object(
    {
        observacion: z.string(
            {
                required_error: 'La observacion es necesaria para el reporte',
                invalid_type_error: 'La observacion es un tipo String'
            }
        ) ,
        idAula: z.string(
            {
                required_error: 'El ID del aula es necesaria para registrar el reporte.',
                invalid_type_error: 'El ID del aula es un tipo String'
            }
        ),
        fecha: z.string(
            {
                invalid_type_error: "La fecha debe ser un String"
            }
        ).optional(),
        hora: z.string(
            {
                invalid_type_error: "La fecha debe ser un String"
            }
        ).optional()
    }
)