import * as productController from './controller/product.js'
import { Router } from "express";
const router = Router()

router.get('/', (req, res,next) => {res.json({ message: "Proudcts API" })})
router.post("/add", productController.addProduct)
router.put("/update/:_id/:userId", productController.updateProduct)
router.delete("/delete/:_id/:userId", productController.deleteProduct)
router.get("/getProducts", productController.getAllProducts)

export default router