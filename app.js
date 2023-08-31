//import all necessary
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/UserRoute.js')
const app = express();
const connectToDb = require('./config/db.js')


//express Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//connect db
connectToDb()
//
app.use('/',userRouter)


module.exports = app;