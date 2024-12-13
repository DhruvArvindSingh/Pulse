function encryptDecrypt(inpString, xorKey) 
{ 
    inpString = inpString.split("");  
    let len = inpString.length; 
    for (let i = 0; i < len; i++) 
    { 
        inpString[i] = (String.fromCharCode((inpString[i].charCodeAt(0)) ^ xorKey.charCodeAt(0))); 
        process.stdout.write(inpString[i]); 
    } 
    return inpString.join(""); 
}

export default function encrypt(req, res, next) {
    console.log("encrypr called");
    console.log("req.body =", req.body);
    let pass = req.cookies.password;
    for(let i = 0; i< req.body.length; i++){
        if(req.body[i] == "" || req.body[i] == null){
            req.body[i] = null;
        }else{
            req.body[i]= encryptDecrypt(req.body[i], pass);
        }
    }
    next();

}