import express from 'express';
import { createProduct, deletProduct, getProducts, updateProduct } from '../controllers/product.controller';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.delete('/:id_producto', deletProduct);
router.put('/', updateProduct);

export default router;
