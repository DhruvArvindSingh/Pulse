
import client from "../database/index.js";
export default async function p_user_id(req, res, next) {
    console.log("p_user_id called");
    console.log("decoded email = ", req.email);
    const result = await client.query(`
        SELECT * FROM personal_details WHERE user_id = $1;
        `, [req.user_id]);
    if (result.rows.length == 0) {
        req.p_user_id = -1;
    }
    else{
        req.p_user_id = result.rows[0].id;
    }
    next();
}