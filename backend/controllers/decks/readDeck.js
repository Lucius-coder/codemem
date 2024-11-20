import sql from "../../database/database.js";

export default async function readDeck(req, res) {
    try {
        const user = req.user[0].id;
        const get_decks = await sql`select *
                                    from decks where user_id=${user}`
        res.json({message: 'Deck read',get_decks});
    } catch (e) {
        res.status(500).send({message: 'Something went wrong',error: e});
    }
}