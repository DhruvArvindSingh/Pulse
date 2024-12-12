import express from "express";
import ejs from "ejs";
import pkg from "pg";

const { Client} = pkg;

const app = express();

const client  = new Client("postgresql://neondb_owner:L3GocSPQTW7u@ep-flat-glade-a1ydo5jt.ap-southeast-1.aws.neon.tech/neondb?sslmode=require");

await client.connect();

app.get("/", async (req, res) => {
        
})