import product from "../models/product.js";

function createTables() {
  product.sync({alter: true});
}

try {
  createTables()
} catch(e) {
  console.log(e);
}
