import express from 'express'
import devBundle from "./devBundle"; /*should be commented out when building the application code for production.*/
import path from 'path'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()
devBundle.compile(app)/*should be commented out when building the application code for production.*/
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))