

async function submit() {
    console.log("submit called");
    const f_name = document.getElementById("first_name").value;
    const l_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const re_password = document.getElementById("confirm-password").value;
    if (password != re_password) {
        alert("Password and Re-Password do not match");
        return;
    }
    if (f_name == "" || l_name == "" || email == "" || password == "" || re_password == "") {
        alert("Please fill all the fields");
        return;
    }
    if (f_name_format(f_name) == false) {
        alert("Please enter a valid First Name.");
        return;
    }
    if (l_name_format(l_name) == false) {
        alert("Please enter a valid Last Name.");
        return;
    }
    if (email_format(email) == false) {
        alert("Please enter a valid email address.");
        return;
    }
    if (pass_format(password) == false) {
        alert("Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }
    try{

        const res = await fetch("/signup", {
            method: "POST",
            body: JSON.stringify({
                first_name: f_name,
                last_name: l_name,
                email: email,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }catch(e){
        console.log("Error occurred during signup: ", e);
    }
}
function pass_format(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
function f_name_format(f_name) {
    return /^[a-zA-Z]+$/.test(f_name);
    
}
function l_name_format(l_name) {
    return /^[a-zA-Z]+$/.test(l_name);   
}
function email_format(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}