import sql, {checkUser} from "../../database/database.js";
import generateTokenAndCookie from "../../utils/generateTokenAndCookie.js";
import bcrypt from "bcryptjs";
export default async function login(req, res) {
    try {
        const {username,email, password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



        if (!username|| !email || !password) {
            return res.status(400).send({message: "Please provide email and password"});
        }
const userCredentials=await checkUser(username,email);
        if (userCredentials.length ===0) {
            return res.status(400).send({
                message: "Username or password does not exist. We recommend you to sign up.", userCredentials
            });
        }

        const comparePassword = await bcrypt.compare(password, userCredentials[0].password);
        if (!comparePassword) {
            return res.status(400).send({message: "Invalid password"});
        }
        const userFromDb = await sql`SELECT *
                                     FROM users
                                     WHERE email = ${email}`;
        const token = await generateTokenAndCookie(res, userFromDb);
        return res.status(200).json({
            message: "Login successful",
            userFromDb,
            token,
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({message: "Internal server error", error: e.message});
    }
}