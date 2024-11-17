export default async function logout(req, res)  {
    try{
res.clearCookie("token");
res.status(200).send({message: "Logged out successfully"})
    }catch (e){
        console.log(e)
        res.status(500).send({message: "Internal server error",error: e.message})
    }
}