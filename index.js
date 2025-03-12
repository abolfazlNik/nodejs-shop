import express from "express";
import { getProductById, getProducts } from "./src/services/product.service.js";
import { getCategoryByName } from "./src/services/category.service.js";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.json({ message: 'Hello, world!' });
} catch (error) {
    console.error("Error handling root route:", error);
    res.status(500).json({ message: "Internal Server Error" });
}
})

app.get("/products", async(req, res) => {
  try {
      const products = await getProducts()
      res.json({products: products})
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get('/products/:id', async(req, res) => {
  try {
    const { id } = req.params
    const product = await getProductById(id)
    if (!product) {
      return res.status(404).json({error: 'Product not found'})
    }
    res.json({product}) 
  } catch (error) {
    console.error(`Error fetching product with ID ${req.params.id}:`, error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

app.get("/category/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const category = await getCategoryByName(name);

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    res.json({ category });
  } catch (error) {
      console.error(`Error fetching category with name ${req.params.name}:`, error);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});