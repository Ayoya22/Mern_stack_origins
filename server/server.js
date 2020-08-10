import express from 'express'
import devBundle from "./devBundle"; /*should be commented out when building the application code for production.*/
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

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

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernHICCAM'
MongoClient.connect(url, (err, db)=> {
    console.log("Connected successfully to mongodb server")
    db.close()
})