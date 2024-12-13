import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { CLIENT_LINK } = process.env;
const { Client } = pkg;
const client = new Client(`${CLIENT_LINK}`);
await client.connect();
await client.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, first_name VARCHAR(50),last_name VARCHAR(50),email VARCHAR(255) UNIQUE NOT NULL,password VARCHAR(255) NOT NULL,created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, token VARCHAR(255));");

export default client;