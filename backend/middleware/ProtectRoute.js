import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sql from "../database/database.js";

dotenv.config();
 const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.token;
console.log(token)
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No Token Provided",token});

        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid Token" });

        }
        const user= await  sql `select id from users where id=${decoded.user.id}`

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user
        console.log(req.user[0].id)
        next();

    }catch (e){
        console.log(e)
        res.status(500).send({message: "Internal server error",error: e.message})
    }
}
export default protectRoute;