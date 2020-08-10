import express from 'express'
import devBundle from "./devBundle"; /*should be commented out when building the application code for production.*/
import path from 'path'
import template from './../template'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()
devBundle.compile(app)/*should be commented out when building the application code for production.*/
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
})
