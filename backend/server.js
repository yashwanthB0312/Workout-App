// Imports 
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const workoutsRouter = require('./routes/workouts')
const cors = require('cors')

// Configs
dotenv.config()
const app = express()

// Variables
const port = process.env.PORT
const mongo = process.env.MONGO_URL

// Express app
app.use(express.json())

// Cors 
app.use(cors())

// Middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// Routes
app.use('/api/workouts',workoutsRouter)

// Connnect to db
mongoose.connect(mongo)
.then(()=>{
    console.log(`connected to db`)
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })
})
.catch((err)=>{
    console.log(`${err}`)
})
