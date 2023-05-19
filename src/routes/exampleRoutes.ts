import express from 'express';
import { exampleController } from '../controllers/exampleController';
import connection from '..';

const router = express.Router();

router.get('/ejemplo', async (req, res) => {
  connection.query('SELECT * FROM tabla_ejemplo', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
});

export default router;
