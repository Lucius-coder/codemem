import sql, {checkUser} from "../../database/database.js";
import generateTokenAndCookie from "../../utils/generateTokenAndCookie.js";
import bcrypt from "bcryptjs"


export default async function signup(req, res) {
    try{

    const {username, password, email,confirmPassword} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!username || !password || !email||!confirmPassword) {
        return res.status(400).json({
            message: "Please fill " +
                "all the fields"
        })
    }
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Please enter a " +
                "valid email"
        })
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message: "Please enter a secure password your password must contain at" +
                " least one uppercase letter, one lowercase letter," +
                " one number and one special character"
        })
    }

    const user = await checkUser(username, email);
    if (user.length > 0) {
        return res.status(400).json({
            message: "Username or email already exists"
        })
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await sql`INSERT INTO users (name, email, password) VALUES (${username}, ${email}, ${hashedPassword})`;
    const userFromDb = await sql`SELECT name,email,id FROM users WHERE name = ${username} and email = ${email}`;
    const tk=await generateTokenAndCookie(res,userFromDb[0])
    if (newUser) {
        return res.status(201).json({
            message: "User created successfully"
        ,userFromDb})
    }
    }catch (e) {
        console.log(e)
        res.status(500).send({message: "Internal server error",error: e.message})
    }

}