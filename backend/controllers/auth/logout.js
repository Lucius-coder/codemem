

export default async function logout (req, res)  {
try{

    res.clearCookie("token");
    res.status(200).send({message:` user logged out successfully`});
}
catch(error){
    console.log(error);
    res.status(500).send({message:"internal server error",error: error});
}
}