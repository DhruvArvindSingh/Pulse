export default async function details_get(req, res) {
    console.log("decoded email = ", req.email);
    res.render("details");
}