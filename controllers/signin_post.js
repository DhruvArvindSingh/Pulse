import jwt from "jsonwebtoken";
import client from "../database/index.js";
import dotenv from "dotenv";
dotenv.config();

const {JWT_SECRET} = process.env;

export default async function signin_post(req, res){
    console.log("post signin received");
    const { email, password } = req.body;
    const user = await client.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    // console.log("user =",user);
    const user_email = user.rows[0].email;
    console.log("user_email = ", user_email);
    if (user.rows.length > 0) {
        const token = jwt.sign({ email: user_email }, JWT_SECRET);
        console.log("token = ", token);
        await client.query("UPDATE users SET token = $1 WHERE email = $2", [token, email]);
        // res.setHeader("token",token);
        res.json({ token: token });
    }
    else {
        console.log("user not found");
    }
}