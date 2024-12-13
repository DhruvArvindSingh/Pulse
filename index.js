import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hash_pass from "./middleware/hash_pass.js";
import verify from "./middleware/verify.js";
import home from "./controllers/home.js";
import signin_get from "./controllers/signin_get.js";
import signin_post from "./controllers/signin_post.js";
import signup_get from "./controllers/signup_get.js";
import signup_post from "./controllers/signup_post.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 80;

const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// app.use(express.static("public"));

app.get("/",home);
app.get("/signup", signup_get);
app.post("/signup", hash_pass, signup_post);
app.get("/signin", signin_get);
app.post("/signin", hash_pass, signin_post);
app.get("/details", verify,
    
    async (req, res) => {
        console.log("decoded email = ", req.email);
        res.render("details");
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});