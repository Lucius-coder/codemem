import sql from "../../database/database.js";

export default async function createDeck(req,res) {
try{
    const {name} = req.body;
    const userId=req.user[0].id;
if(!name){
    return res.status(400).send({message:"Please enter a deck name"});
}
const data= await sql `insert into decks (name,user_id) values (${name}, ${userId})`
res.status(200).send({message: "Deck created successfully"})

}catch(err){
    res.status(500).send({message:"Something went wrong"})
}
}