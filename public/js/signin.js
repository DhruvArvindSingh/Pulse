async function signin() {
    console.log("signin called");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
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
}  