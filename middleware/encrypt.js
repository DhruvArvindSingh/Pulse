
import crypto from 'crypto'
import dotenv from "dotenv";
dotenv.config();

const {ENCRYPTION_ALGO}= process.env;

export default async function encrypt(req, res, next) {
    const pass = req.cookies.password;
    console.log("pass =", pass);
    console.log("req.body =", req.body);
    for(let key in req.body){
        if(req.body[key] == "" || req.body[key] == null){
            req.body[key] = null;
        }else{
            // const iv = crypto.randomBytes(5); 
            console.log(`before req.body[${key}] = ${req.body[key]}`); 
            const cypher = await crypto.createCipher(ENCRYPTION_ALGO, pass);  
            req.body[key] = await cypher.update(req.body[key], 'utf8', 'hex') + cypher.final('hex');
            console.log(`after req.body[${key}] = ${req.body[key]}`);
        }
    }
    next();
} 
