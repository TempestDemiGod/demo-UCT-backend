import pabellonModel from '../model/pabellon.model.js'
import aulaModel from '../model/aula.model.js'
import reporteModel from '../model/reporte.model.js'


export const CreateReport = async(observacion , idAula) => {
    try {
        const aulaFound = await aulaModel.findById('6753b5b7c12362722f7e4a99')

        if(!aulaFound) return {
            status: 404,
            data: 'El aula no existe'
        }
        const newReport = new reporteModel({
            observacion,
            idAula
        })

        const saveReport = await newReport.save()
        return {
            status: 201,
            data: saveReport
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            data: e
        }
    }
}

export const getReport = async(id) => {
    try {
        const reportFound = await reporteModel.findById({_id: id}).populate({
            path: 'idAula', 
            populate: {
              path: 'idPabellon',
              model: 'Pabellon'
            }
          })
        if(!reportFound) return {
            status: 404,
            data: 'El reporte no existe'
        }
        const fecha = reportFound._doc.createdAt
        const dia = String(fecha.getDate()).padStart(2, '0'); 
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
        const anio = String(fecha.getFullYear()); 
        const newResponse = {
            ...reportFound._doc,
            fecha: `${dia}/${mes}/${anio}`,
            hora: `${String(fecha.getHours()).padStart(2, '0')}:${String(fecha.getMinutes()).padStart(2, '0')}`
        }
        return {
            status: 200,
            data: newResponse
        }

    } catch (e) {
        console.log(e)
        return {
            status: 500,
            data: e
        }
    }
}

export const allReports = async() => {
    try {
        const allReports = await reporteModel.find().populate(
            {
                path: 'idAula',
                populate: {
                    path: 'idPabellon',
                    model: 'Pabellon'
                }
            }
        )
        return {
            status: 200,
            data: allReports
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            data: e
        }
    }
}