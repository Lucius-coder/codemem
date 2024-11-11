import express, {urlencoded} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./database/connectToMongoDb.js";

const app=express()
connectToMongoDb()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)

})

