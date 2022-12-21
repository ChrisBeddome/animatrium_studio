import express from 'express'
import Product from "src/models/product.js"

const getAllProducts = async (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const products = await Product.findAll()
  res.send(products)
};

const getProduct = async (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const productID = req.params.productID
  const product = await Product.findByPk(productID)

  if (product) {
    res.send(product)
  } else {
    res.send({})
  }
}

export default {
  getAllProducts,
  getProduct
}
