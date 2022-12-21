import express from 'express'
const getAllProducts = async (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const products = []
  res.send(products)
};

const getProduct = async (req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const productID = req.params.productID
  const product = null

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
