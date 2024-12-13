import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { CLIENT_LINK } = process.env;
const { Client } = pkg;
const client = new Client(`${CLIENT_LINK}`);
await client.connect();
await client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, first_name VARCHAR(200),last_name VARCHAR(200),email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, token VARCHAR(255));");
await client.query(`CREATE TABLE IF NOT EXISTS personal_details(
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE NOT NULL,
    first_name VARCHAR(200) NOT NULL,
    middle_name VARCHAR(200),
    last_name VARCHAR(200) NOT NULL,
    gender VARCHAR(200) NOT NULL,
    date_of_birth VARCHAR(200) NOT NULL,
    age VARCHAR(200) NOT NULL,
    marital_status VARCHAR(200) NOT NULL,
    phone_no_1 VARCHAR(200) NOT NULL,
    phone_no_2 VARCHAR(200),
    qualification VARCHAR(200) NOT NULL,
    home_address_1 VARCHAR(200) NOT NULL,
    home_address_2 VARCHAR(200),
    country VARCHAR(200) NOT NULL,
    state VARCHAR(200) NOT NULL,
    city VARCHAR(200) NOT NULL,
    employment_status VARCHAR(200) NOT NULL,
    aadhar_card_no VARCHAR(200) NOT NULL,
    pan_card_no VARCHAR(200),
    passport_no VARCHAR(200),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);

export default client;