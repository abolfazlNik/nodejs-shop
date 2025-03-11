import { client } from "../model/db.js";

async function getCategoryByName(categoryName) {
    const res = await client.query(
      "SELECT * FROM category WHERE name ILIKE $1", [categoryName]);
    return res.rows
}

export { getCategoryByName }