import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()
export default async function generateTokenAndCookie(res, user) {
    try {
        // Generate the JWT token
        const token = jwt.sign({user}, process.env.JWT_SECRET, { expiresIn:'7d'});
        // Set the cookie with the token
        res.cookie('token', token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
            secure: process.env.NODE_ENV ==="production",// Ensures the cookie is only sent over HTTPS in production
            sameSite: "None",


        });
        


        return token;
    } catch (error) {
        console.log(error);
    }
}


