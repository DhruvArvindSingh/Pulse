import client from "../database/index.js";
export default async function personal_details_post(req, res) {
    console.log("personal_details_post called");
    const result = await client.query(`SELECT * FROM users WHERE email = $1`, [req.email]);
    const user = result.rows[0];
    console.log("user =", user);
    const user_id = user.id;
    console.log("user_id =", user_id);
    console.log("req.body =", req.body);
    const p_data = await client.query(`INSERT INTO personal_details(
        user_id,
        first_name,
        middle_name,
        last_name,
        gender,        
        date_of_birth,
        age,
        marital_status,
        phone_no_1,
        phone_no_2,
        qualification,
        home_address_1,
        home_address_2,
        country,
        state,
        city,
        employment_status,
        aadhar_card_no,
        pan_card_no,
        passport_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *`,
        [
            user_id,
            req.body.first_name,
            req.body.middle_name,
            req.body.last_name,
            req.body.gender,
            req.body.date_of_birth,
            req.body.age,
            req.body.marital_status,
            req.body.phone_no_1,
            req.body.phone_no_2,
            req.body.qualification,
            req.body.home_address_1,
            req.body.home_address_2,
            req.body.country,
            req.body.state,
            req.body.city,
            req.body.employment_status,
            req.body.aadhar_card_no,
            req.body.pan_card_no,
            req.body.passport_no,
        ])

}