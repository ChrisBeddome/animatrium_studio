import express from "express"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"
const app = express()
const PORT = parseInt(process.env.API_PORT) || (() => { throwMissingVarError("API_PORT") })()

app.get('/', (req, res) => {
  res.send('Hello idiots')
})

import Product from "./models/product.js"
app.get('/products', async (req, res) => {
  const products = await Product.findAll()
  res.send({products: products})
})

app.get('/products/:id', async (req , res) => {
  const product = await Product.findOne({ where: { id: req.params.id } })
  res.send({product: product})
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})


