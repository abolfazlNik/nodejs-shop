import { client } from "../model/db.js";

async function getProducts() {
  try {
    const res = await client.query("SELECT * FROM product");
    return res.rows;
  } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Database query failed");
  }
}

async function getProductById(id) {
  try {
    const res = await client.query("SELECT * FROM product WHERE id = $1", [id]);
    return res.rows[0] || null;
  } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw new Error("Database query failed");
  }
}

export {getProducts, getProductById}