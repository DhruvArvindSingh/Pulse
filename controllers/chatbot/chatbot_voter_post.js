import client from "../../database/index.js";
export default async function chatbot_voter_post(req, res) {
    console.log("chatbot_voter_post called");
    console.log("decoded email = ", req.email);
    console.log("user_id = ", req.user_id)
    console.log("p_user_id = ", req.p_user_id)
    const {
        first_name,
        middle_name,
        last_name,
        dob,
        address
    } = req.body;
    if (req.p_user_id == -1) {
        await client.query(`
            INSERT INTO personal_details(
                user_id,
                first_name,
                middle_name,
                last_name,     
                date_of_birth,
                home_address_1
                ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [req.user_id, first_name, middle_name, last_name, dob, address]);
    }
    else {
        const query = `
  UPDATE personal_details
  SET first_name = $1,
      middle_name = $2,
      last_name = $3,
      date_of_birth = $4,
      home_address_1 = $5,
  WHERE id = $6
`;
        const values = [first_name, middle_name, last_name, dob, address, req.p_user_id];

        await client.query(query, values, (err, res) => {
            if (err) {
                console.error('Error executing query', err.stack);
            } else {
                console.log('Update successful');
            }
        });

    }

    res.status(200).json({ message: "success" });



}