import express from "express"
import productRoute from "./products"

const router = express.Router()
router.use("/products", productRoute)

export default router
