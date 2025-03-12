import pg from 'pg'
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg
const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  })

  (async () => {
    try {
        await client.connect();
        console.log("Connected to PostgreSQL database successfully!");
    } catch (error) {
        console.error("Failed to connect to PostgreSQL:", error);
        process.exit(1);
    }
})();

export {client}

