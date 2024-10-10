import express from 'express'
import { addProduct, getProduct, getProducts,deleteProduct, editProduct } from '../controller/productsController.js'
const router = express.Router()

router
    .route('/')
        .get(getProducts)
        .post(addProduct)
        .delete(deleteProduct)
        .patch(editProduct)

router.get('/:id', getProduct)

export default router