import Product from "../models/product.js"

const getAllProducts = async (_req, res, _next) => {
  const products = await Product.findAll()
  res.send(products)
};

const getProduct = async (req, res, _next) =>   {
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
