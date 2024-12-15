import client from "../../database/index.js";
export default async function chatbot_adhaar_post(req, res) {
    console.log("chatbot_adhaar_post called");
    console.log("decoded email = ", req.email);
    console.log("user_id = ", req.user_id)
    console.log("p_user_id = ", req.p_user_id)
    const {
        first_name,
        middle_name,
        last_name,
        dob,
        gender,
        address,
        mobile_number,
        email,
        biometric_data
    } = req.body;
    await client.query(`
            INSERT INTO adhaar_details(
                user_id,
                first_name,
                middle_name,
                last_name,
                gender,
                date_of_birth,        
                address,
                mobile_number,
                email,
                biometric_data) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [req.user_id, first_name, middle_name, last_name, gender, dob, address, mobile_number, email, biometric_data]);



    res.status(200).json({ message: "success" });



}