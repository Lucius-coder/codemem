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
            httpOnly: true,
            secure:process.env.NODE_ENV !== "development",
            sameSite:"none"// Can also be 'Strict' or 'None' if needed for cross-origin requests

        });
        return token;
    } catch (error) {
        console.log(error);
    }
}


