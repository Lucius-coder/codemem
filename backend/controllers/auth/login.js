import sql from "../../database/database.js";
import generateTokenAndCookie from "../../utils/generateTokenAndCookie.js";
import bcrypt from "bcryptjs";
export default async function login(req, res) {
    try {
        const {username,email, password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



        if (!username|| !email || !password) {
            return res.status(400).send({message: "all fields must be filled"});
        }
        if(!emailRegex.test(email)) {
            return res.status(400).json({message: "email  must be a valid email"});
        }
const userCredentials=await sql `select * from users where email=${email}  or name =${username}`;
        if (!userCredentials.length) {
            return res.status(400).send({
                message: "Username or email does not exist. We recommend you to sign up.", userCredentials
            });
        }

        const comparePassword = await bcrypt.compare(password, userCredentials[0].password);
        if (!comparePassword) {
            return res.status(400).send({message: "Invalid password"});
        }
        const userFromDb = await sql`SELECT *
                                     FROM users
                                     WHERE email = ${email}`;
        const token = await generateTokenAndCookie(res, userFromDb[0]);

        return res.status(200).json({
            message: "Login successful",
            userFromDb
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({message: "Internal server error", error: e.message});
    }
}