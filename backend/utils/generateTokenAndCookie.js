import jsonwebtoken from 'jsonwebtoken'
export default function generateTokenAndCookie( res,token) {
    try{
        const token =jsonwebtoken.sign(token);
        return res.cookie('token', token, { maxAge: 7 * 60 * 60 * 1000 , sameSite:false, httpOnly:true });
    }catch (error){
console.log(error)
    }
}