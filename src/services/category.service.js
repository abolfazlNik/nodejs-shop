import { client } from "../model/db.js";

async function getCategoryByName(categoryName) {
  try {
    const res = await client.query(
        "SELECT * FROM category WHERE name ILIKE $1", 
        [categoryName]
    );
    return res.rows;
  } catch (error) {
      console.error(`Error fetching category with name "${categoryName}":`, error);
      throw new Error("Database query failed");
  }
}

export { getCategoryByName }