import bcrypt from 'bcryptjs';
import User from "../../database/models/User.js";
import generateTokenAndCookie from "../../utils/generateTokenAndCookie.js";
export default async function signup(req, res) {

    try {


        const {email, password, username} = req.body;
        const comprehensiveEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validEmail = comprehensiveEmailRegex.test(email);
        const EmailInDB = await User.findOne({email})
        const UsernameInDB=await User.findOne({username})
        const comprehensivePasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const validPassword=comprehensivePasswordRegex.test(password);
        if (!email || !password || !username) {
            return res.status(400).json({message: "all fields are required"});
        }

if (UsernameInDB){
    return res.status(400).json({message:"Username already exists"});
}
        if (username.length < 2) {
            return res.status(400).json({message: "username must be 2 or more characters"});
        }
        if (!validEmail) {
            return res.status(400).json({message: "invalid email"});
        }
        if (EmailInDB) {
            return res.status(403).json({message: "email already exists"});
        }
        if (!validPassword) {
            return res.status(400).json({message: "password must be at least 8 characters have one uppercase letter and at least one symbol"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({email,username,password:hashedPassword});
        await newUser.save();
        newUser.password=undefined
generateTokenAndCookie(res,newUser._id)
res.status(200).json({message: "user created successfully.",newUser});

    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "internal server error",error});
    }
}