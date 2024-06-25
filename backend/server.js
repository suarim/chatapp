import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import connecttodb from "./db/connecttodb.js"
import cookieParser from "cookie-parser"
import bcrypt from "bcryptjs"
import userRoutes from "./routes/user.routes.js"
dotenv.config()
const app=express()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send("bsdk")
})
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoute)
app.use('/api/users',userRoutes)
app.listen(PORT,()=>{
    connecttodb()
    console.log(`listening on port ${PORT}...`)
})