import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db/db.js'
import router from './Route/route.js'


const app=express()
app.use(express.json())
dotenv.config()
app.use(cors())
db()
app.use('/api/vi',router)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`port is running ${process.env.PORT}`)
})