import express from 'express';
import { createCategory } from '../controllers/category.controller';
import { deletClient, getClients, updateClient } from '../controllers/client.controller';

const router = express.Router();

router.post('/', createCategory);
router.get('/', getClients);
router.delete('/:documento', deletClient);
router.put('/', updateClient);

export default router;
