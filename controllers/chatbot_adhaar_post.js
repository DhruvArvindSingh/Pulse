import client from "../database/index.js";
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
    if (req.p_user_id == -1) {
        await client.query(`
            INSERT INTO personal_details(
                user_id,
                first_name,
                middle_name,
                last_name,
                gender,        
                date_of_birth,
                home_address_1,
                phone_no_1) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [req.user_id, first_name, middle_name, last_name, gender, dob, address, mobile_number]);
    }
    else {
        const query = `
  UPDATE personal_details
  SET first_name = $1,
      middle_name = $2,
      last_name = $3,
      gender = $4,
      date_of_birth = $5,
      home_address_1 = $6,
      phone_no_1 = $7
  WHERE id = $8
`;
        const values = [first_name, middle_name, last_name, gender, dob, address, mobile_number, req.p_user_id];

        await client.query(query, values, (err, res) => {
            if (err) {
                console.error('Error executing query', err.stack);
            } else {
                console.log('Update successful');
            }
        });

    }



}