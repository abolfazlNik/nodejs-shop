import { client } from "../model/db.js";

async function getProducts() {
    const res = await client.query('select * from product')
    return res.rows
}

async function getProductById(id) {
    const res = await client.query("select * FROM product WHERE id = $1", [id]);
    return res.rows[0] || null;
  }

export {getProducts, getProductById}