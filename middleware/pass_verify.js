import client from "../database/index.js";
import hash from './hash.js';
export default async function pass_verify(req, res, next) {
    console.log("pass_verify called");
    console.log("decoded email = ", req.email);
    console.log("password = ", req.cookies.password);
    const result = await client.query(`
        SELECT * FROM users WHERE email = $1;
        `, [req.email]);
    if (result.rows.length == 0) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
    }
    const user = result.rows[0];
    // console.log("user = ", user);
    console.log("user.password = ", user.password);
    console.log("req.cookies.password = ", req.cookies.password);
    console.log("hash(req.cookies.password) = ", await hash(req.cookies.password));
    if (user.password != await hash(req.cookies.password)) {
        return res.status(401).json({ error: "Unauthorized" })
    }
    next();
}