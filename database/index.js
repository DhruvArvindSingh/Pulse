import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { CLIENT_LINK } = process.env;
const { Client } = pkg;
const client = new Client(`${CLIENT_LINK}`);
await client.connect();
await client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, first_name VARCHAR(50),last_name VARCHAR(50),email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, token VARCHAR(255));");
await client.query(`CREATE TABLE IF NOT EXISTS personal_details(
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    age INTEGER NOT NULL,
    marital_status VARCHAR(50) NOT NULL,
    phone_no_1 BIGINT NOT NULL,
    phone_no_2 BIGINT,
    qualification VARCHAR(50) NOT NULL,
    home_address_1 VARCHAR(100) NOT NULL,
    home_address_2 VARCHAR(100),
    country VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    employment_status VARCHAR(50) NOT NULL,
    aadhar_card_no BIGINT NOT NULL,
    pan_card_no VARCHAR(50),
    passport_no VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);

export default client;