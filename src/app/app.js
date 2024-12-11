import express from "express";
import cors from "cors"
import morgan from "morgan";
import routerReport from '../routes/report.route.js'


const app = express()

app.use(cors(
    {
        origin: ['*'],
        credentials: true
    }
))

app.use(express.json())
app.use(morgan('dev'))

app.use('/api', routerReport)

app.get("/", (req, res)=>{ res.send("app get route")})

export default app