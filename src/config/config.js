import { configDotenv } from 'dotenv'
configDotenv()

export const PORT_BACK_END = 3000

export const URI_DB = process.env.URI_DB || ''