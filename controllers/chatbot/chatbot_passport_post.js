import client from "../../database/index.js";
export default async function chatbot_passport_post(req, res) {
    console.log("chatbot_passport_post called");
    console.log("decoded email = ", req.email);
    console.log("user_id = ", req.user_id)
    console.log("p_user_id = ", req.p_user_id)
    const {
        first_name,
        middle_name,
        last_name,
        dob,
        address,
        birthCertificate,
    } = req.body;
    await client.query(`
            INSERT INTO passport_details(
                user_id,
                first_name,
                middle_name,
                last_name,     
                date_of_birth,
                home_address,
                birthCertificate
                ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [req.user_id, first_name, middle_name, last_name, dob, address,birthCertificate]);

    res.status(200).json({ message: "success" });



}