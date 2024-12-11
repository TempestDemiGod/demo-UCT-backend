import { Router } from 'express'
import { validateSchema } from '../middlewares/validatorSchema.middleware.js'
import { reporteSchema } from '../schema/reporte.schema.js'
import { GetAllReports, getOneReport, PostReport } from '../controllers/report.controller.js'

const router = Router()

router.post('/report', validateSchema(reporteSchema), PostReport)

router.get('/report/:id', getOneReport)

router.get('/report', GetAllReports)

export default router