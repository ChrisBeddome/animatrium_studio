import express from "express"
import productRoute from "./products.js"

const router = express.Router()
router.use("/products", productRoute)

export default router
