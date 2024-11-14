import bcrypt from "bcryptjs";
import User from "../../database/models/User.js";
import generateTokenAndCookie from "../../utils/generateTokenAndCookie.js";
const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({email})
        if (!email || !password) {
            return res.status(400).send({message: "fields cannot be empty"});
        }
        if (!user) {
            return res.status(401).send({message: "no user found we recommend you sign up to our service",user});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({message: "invalid password"});
        }
        await generateTokenAndCookie(res, user._id)

        res.status(200).json({message: "user login successfully.", user});
    }catch (error) {
        res.status(500).send({message: "internal server error",error});
        console.log(error);
    }
}
export default login;