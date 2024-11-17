import express, {urlencoded} from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";
import decksRoutes from "./routes/decks.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app=express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/decks",decksRoutes)
const port =process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running on port 5000`)

})

