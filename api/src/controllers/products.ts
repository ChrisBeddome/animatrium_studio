import express from 'express'
import { query } from '../utils/dbConnect.js'

const getAllProducts = async (_req: express.Request, res: express.Response, _next: express.NextFunction): Promise<void> => {
  const products: Array<any> = await query("SELECT * FROM products;")
  res.send(products)
};

const getProduct = async (req: express.Request, res: express.Response, _next: express.NextFunction): Promise<void> => {
  const productID: number = Number(req.params.productID)

  if (!productID) {
    res.status(400).send({message: 'must provide product id'})
    return
  }

  const result: Array<any> = await query(`SELECT * FROM products WHERE id = ?`, [productID])
  const product = result[0]

  if (product) {
    res.send(product)
  } else {
    res.status(404).send()
  }
}

export default {
  getAllProducts,
  getProduct
}
