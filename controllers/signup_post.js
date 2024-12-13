import client from "../database/index.js";
export default async function signup_post(req, res) {
    console.log("post signup received");
    const { first_name, last_name, email, password } = req.body;
    try {
        const user = await client.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [first_name, last_name, email, password]);
    }
    catch (e) {
        console.log("error occured");
        console.log(e);
    }
    res.redirect("/");
}