import express from "express"
import productRoute from "src/routes/products.js"

const router = express.Router()
router.use("/products", productRoute)

export default router
