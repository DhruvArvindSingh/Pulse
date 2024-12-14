
import crypto from 'crypto'
import dotenv from "dotenv";
dotenv.config();

const {ENCRYPTION_ALGO}= process.env;


export default function decrypt(req, res, next) {
    const pass = req.cookies.password;
    console.log("pass =", pass);
    for(let key in req.body){
        if(req.body[key] == "" || req.body[key] == null){
            req.body[key] = null;
        }else{
            console.log(`before req.body[${key}] = ${req.body[key]}`); 
            const decipher = crypto.createDecipher(ENCRYPTION_ALGO, pass);
            req.body[key] = decipher.update(req.body[key], 'hex', 'utf8') + decipher.final('utf8');
            console.log(`after req.body[${key}] = ${req.body[key]}`);
        }
    }
}