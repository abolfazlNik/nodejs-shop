import express from "express";
import { getProductById, getProducts } from "./src/services/product.service.js";
import { getCategoryByName } from "./src/services/category.service.js";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

app.get("/products", async(req, res) => {
    const products = await getProducts()
    res.json({products: products})
});

app.get('/products/:id', async(req, res) => {
  const { id } = req.params
  const product = await getProductById(id)
  if (!product) {
    return res.status(404).json({error: 'Product not found'})
  }
  res.json({product})
})

app.get("/category/:name", async (req, res) => {
  const { name } = req.params;
  const category = await getCategoryByName(name);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json({ category });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});