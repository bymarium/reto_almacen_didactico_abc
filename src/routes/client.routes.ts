import express from 'express';
import { createClient, deletClient, getClients, updateClient } from '../controllers/client.controller';

const router = express.Router();

router.post('/', createClient);
router.get('/', getClients);
router.delete('/:documento', deletClient);
router.put('/', updateClient);

export default router;
