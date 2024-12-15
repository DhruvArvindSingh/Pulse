import client from "../../database/index.js";
export default async function chatbot_marksheet_post(req, res) {
    console.log("chatbot_marksheet_post called");
    console.log("decoded email = ", req.email);
    console.log("user_id = ", req.user_id)
    console.log("p_user_id = ", req.p_user_id)
    const {
        first_name,
        middle_name,
        last_name,
        dob,
        schoolName,
        currentClass,
        rollNumber,
        marks
    } = req.body;
    await client.query(`
            INSERT INTO marksheet_details(
                user_id,
                first_name,
                middle_name,
                last_name,     
                date_of_birth,
                schoolName,
                currentClass,
                rollNumber,
                marks
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [req.user_id, first_name, middle_name, last_name, dob,schoolName,currentClass,rollNumber,marks]);

    res.status(200).json({ message: "success" });



}