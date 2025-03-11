import { client } from "../model/db.js";

async function getProducts() {
    const res = await client.query('SELECT * from product')
    console.log(res.rows[0])
    return res.rows
}

export {getProducts}