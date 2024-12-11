import { allReports, CreateReport, getReport } from "../services/report.service.js"

export const PostReport = async(req, res) =>{
    const {observacion , idAula} = req.body
    const response = await CreateReport(observacion , idAula)
    res.status(response.status).json(response.data)
}

export const getOneReport = async(req, res) => {
    const {id} = req.params
    const response = await getReport(id)
    res.status(response.status).json(response.data)
}

export const GetAllReports = async(req, res) => {
    const response = await allReports()
    res.status(response.status).json(response.data)
}