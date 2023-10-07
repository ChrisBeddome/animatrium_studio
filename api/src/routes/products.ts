import express from "express"
import productsController from "../controllers/products.js"

const router = express.Router()

router.get("/", productsController.getAllProducts)
router.get("/:productID", productsController.getProduct)

export default router
