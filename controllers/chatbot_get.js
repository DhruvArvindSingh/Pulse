export default async function chatbot_get(req, res) {
    console.log("decoded email = ", req.email);
    console.log("chatbot_get called");
    res.render("chatbot");
}