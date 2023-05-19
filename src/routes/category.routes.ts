import express from 'express';
import { createCategory, deletCategory, getCategories, updateCategory } from '../controllers/category.controller';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.delete('/:id_categoria', deletCategory);
router.put('/', updateCategory);

export default router;
