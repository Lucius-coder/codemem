import postgres from "postgres";
import dotenv from "dotenv";
let sql;
dotenv.config();
try{
sql=postgres(process.env.DB_URI)
console.log("connected to database")
}catch (e){
    console.log(e)
}

export async function checkUser(username, email) {
    return await sql`SELECT *
                     FROM users
                     WHERE name = ${username}
                        OR email = ${email}`
}

export default sql;