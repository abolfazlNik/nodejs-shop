import express from "express";
import { getProducts } from "./services/product.service.js";
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

app.get("/products", async(req, res) => {
    const products = await getProducts()
    res.json({products: products})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});