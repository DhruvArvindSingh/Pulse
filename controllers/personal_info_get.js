import client from "../database/index.js";
import decrypt from "../middleware/decrypt.js";
export default async function personal_info_get(req, res) {
    console.log("personal_info_get called");
    const result = await client.query(`SELECT * FROM users WHERE email = $1`, [req.email]);
    const user = result.rows[0];
    console.log("user =", user);
    const user_id = user.id;
    console.log("user_id =", user_id);
    console.log("req.body =", req.body);
    const p_data = await client.query(`SELECT * FROM personal_details WHERE user_id = $1`, [user_id]);
    let p_result = p_data.rows[0];
    console.log("p_data =", p_result);
    for (const key in p_result) {
        console.log("key =", key);
        console.log("p_result[key] =", p_result[key]);
        if(key == "id"||key == "user_id"||key == "created_at"||key == "updated_at"||key == "user" || p_result[key] == null) {
            continue;
        }
        else{
            const ans =await decrypt(p_result[key], req.cookies.password);
            console.log("ans =", ans);
            p_result[key] = ans;
        }
    }
    console.log("p_result =", p_result);
    res.json(p_result);
    
}