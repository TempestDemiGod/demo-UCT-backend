import app from "./app/app.js";

import { PORT_BACK_END } from "./config/config.js"
import { connectDB } from "./db_connect/db.js";

connectDB()

app.listen(PORT_BACK_END, ()=> console.log(`server on port ${PORT_BACK_END}`))
