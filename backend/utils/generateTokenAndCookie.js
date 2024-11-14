import jwt from 'jsonwebtoken';

export default async function generateTokenAndCookie(res, user) {
    try {
        // Generate the JWT token

        const token = jwt.sign({user}, "secretkey", { expiresIn:'1hr'});

        // Set the cookie with the token
        res.cookie('token', user, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
            httpOnly: true,
            sameSite: 'Lax', // Can also be 'Strict' or 'None' if needed for cross-origin requests

        });
    } catch (error) {
        console.log(error);
    }
}


