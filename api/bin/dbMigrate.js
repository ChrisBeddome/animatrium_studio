import Product from "#/src/models/product.js"

function createTables() {
  Product.sync({alter: true})
}

try {
  createTables()
} catch(e) {
  console.log(e)
}
