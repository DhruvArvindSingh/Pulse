
import client from "../index.js";
export default async function insert_adhaar_details() {
    console.log("insert_adhaar_details called");
    console.log("decoded email = ", req.email);
    client.query(`
        SELECT * FROM users WHERE email = $1;
        `, [req.email]);

    
    
}