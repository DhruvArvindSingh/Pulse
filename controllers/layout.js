// import home from "../views/home.ejs";
// import signup from "../views/signup.ejs";
// import signin from "../views/signin.ejs";
// import details from "../views/details.ejs";
function home_page(req, res) {
    res.render("home");
}
function signup_page(req, res) {
    res.render("signup");
}
function signin_page(req, res) {
    res.render("signin");
}
function details_page(req, res) {
    res.render("details");
}

export default {
    home_page,
    signup_page,
    signin_page,
    details_page
}