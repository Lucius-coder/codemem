
export default async function logout (req, res)  {
try{
    res.cookie('token', '')
}
catch(error){
    console.log(error);
    res.status(500).send({message:"internal server error",error: error});
}
}