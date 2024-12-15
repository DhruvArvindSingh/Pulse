
import client from "../index.js";
export default async function insert_adhaar_details(
    f_name,
    m_name,
    l_name,
    dob,
    gen,
    add,
    mobile_no,
    email,
    biometric) {
    console.log("insert_adhaar_details called");
    console.log("decoded email = ", req.email);
    client.query(`
        SELECT * FROM users WHERE email = $1;
        `, [req.email]);

    
    
}