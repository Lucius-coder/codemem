import req from "express/lib/request.js";
import res from "express/lib/response.js";
import jwt from "jsonwebtoken";

export default  async function verifyToken(req, res, next) {
    try{
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).send({message:"Token not found"});
        }
        jwt.verify(token, "secretkey", (err, decoded) => {
console.log(decoded);
        })
    } catch (error) {
        res.status(500).send({message:"internal server error",error});
    }
}
