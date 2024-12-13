
async function submit(){
    const f_name= document.getElementById("first_name").value;
    const l_name= document.getElementById("last_name").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const re_password= document.getElementById("re-password").value;
    if(password != re_password){
        alert("Password and Re-Password do not match");
        return;
    }
    if(f_name == "" || l_name == "" || email == "" || password == "" || re_password == ""){
        alert("Please fill all the fields");
        return;
    }
    await fetch("/signup",{
        method:"POST",
        body:{
            first_name:f_name,
            last_name:l_name,
            email:email,
            password:password
        }

    })
}