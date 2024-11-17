import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const ProtectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: "You are not logged in"})
        }
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message: "invalid token"})
        }
        console.log(decoded)
        next();
    }catch (e){
        console.log(e)
        res.status(500).send({message: "Internal server error",error: e.message})
    }
}