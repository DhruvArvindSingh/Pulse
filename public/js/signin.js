
async function signin() {
    console.log("signin called");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("Please fill all the fields");
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
    try {

        const res = await fetch("/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    } catch (e) {
        console.log("Error occurred during signup: ", e);
    }
}  

function pass_format(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
function email_format(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}