import jwt from "jsonwebtoken";
import User from "../database/models/User.js";

export default async function verifyToken(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({message: "Token not found"});
        }
        const decoded=jwt.verify(token, "secretkey")

        console.log(decoded);
        const info=await User.findById(decoded)
        if(!decoded){
            return  res.status(401).send({message: "Token is not valid"});
        }
        req.user=decoded.user;
        next();
    } catch (error) {
        res.status(500).send({message: "internal server error", error});
    }
}
