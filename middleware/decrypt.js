
import crypto from 'crypto'
import dotenv from "dotenv";
dotenv.config();

const { ENCRYPTION_ALGO } = process.env;


export default async function decrypt(data, pass) {
    // console.log("pass =", pass);
    let decrypted_data;
    if (data == "" || data == null) {
        data = null;
    } else {
        // console.log(`before data = ${data}`);
        const decipher = await crypto.createDecipher(ENCRYPTION_ALGO, pass);
        decrypted_data = await decipher.update(data, 'hex', 'utf8') + decipher.final('utf8');
        // console.log(`after data = ${data}`);
    }
    console.log("decrypted_data =", decrypted_data);
    return decrypted_data;

}