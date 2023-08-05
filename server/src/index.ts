import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'

import router from './router'
import mongoose from 'mongoose'

const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
})

// const MONGO_URL = 'mongodb+srv://<User>:<password>@cluster0.ytkbkgw.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise
mongoose.connect('MONGO_URL') //Provide const MONGO_URL
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())