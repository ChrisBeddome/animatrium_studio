import Product from "../models/product.js"

const getAllProducts = async (_req, res, _next) => {
  const products = await Product.findAll()
  res.send({products: products})
};

const getProduct = async (req, res, _next) =>   {
  const productID = req.params.productID
  const product = await Product.findOne({ where: { id: productID } })
  res.send({product: product})
}

export default {
  getAllProducts,
  getProduct
}
