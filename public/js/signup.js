import pass_format from "../../utils/pass_format.js";
import email_format from "../../utils/email_format.js";
import f_name_format from "../../utils/f_name_format.js";
import l_name_format from "../../utils/l_name_format.js";


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
    if (pass_format(password) == false) {
        alert("Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }
    if (email_format(email) == false) {
        alert("Please enter a valid email address.");
        return;
    }
    if (f_name_format(password) == false) {
        alert("Please enter a valid First Name.");
        return;
    }
    if (l_name_format(email) == false) {
        alert("Please enter a valid Last Name.");
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