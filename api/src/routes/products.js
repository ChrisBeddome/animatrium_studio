import express from "express"
import productsController from "#src/controllers/products.js"

const router = express.Router()

router.get("/", productsController.getAllProducts)
router.get("/:productID", productsController.getProduct)

export default router
