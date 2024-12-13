import express from "express";
import ejs from "ejs";
import pkg from "pg";
import auth from "./middleware/auth.js";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import { createHash } from 'crypto';

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

function hash_pass(req, res, next) {
    req.body.password = hash(req.body.password);
    next();
}

const JWT_SECRET = "IIT_PULSE_APP";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 80;
const { Client } = pkg;
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// app.use(express.static("public"));
const client = new Client("postgresql://neondb_owner:L3GocSPQTW7u@ep-flat-glade-a1ydo5jt.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");
await client.connect();
await client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, first_name VARCHAR(50),last_name VARCHAR(50),email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, token VARCHAR(255));");

app.get("/",
    (req, res) => {
        res.render("home");
    }
);
app.get("/signup",
    (req, res) => {
        res.render("signup");
    });
app.post("/signup",hash_pass,
    async (req, res) => {
        console.log("post signup received");
        const { first_name, last_name, email, password } = req.body;
        try{
            const user = await client.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [first_name, last_name, email, password]);
        }
        catch(e){
            console.log("error occured");
            console.log(e);
        }
        res.redirect("/");
    }
);
app.get("/signin",
    (req, res) => {
        res.render("signin");
    });
app.post("/signin",hash_pass,async (req,res)=>{
    console.log("post signin received");
    const {email,password} = req.body;
    const user = await client.query("SELECT * FROM users WHERE email = $1 AND password = $2",[email,password]);
    // console.log("user =",user);
    const user_email = user.rows[0].email;
    console.log("user_email = ",user_email); 
    if(user.rows.length > 0){
        const token = jwt.sign({email:user_email}, JWT_SECRET);
        console.log("token = ",token);
        await client.query("UPDATE users SET token = $1 WHERE email = $2", [token, email]);
        res.headers("token",token);

    }
    else{
        console.log("user not found");
    }

    res.redirect("/");
})
// app.get("/details",auth, details_page);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});