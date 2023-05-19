import { Request, Response } from 'express';
import connection from '..';

export const createProduct = async (req: Request, res: Response) => {
  console.log(req.body);
  
  connection.query('INSERT INTO productos SET ?', req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const getProducts = async (req: Request, res: Response) => {  
  connection.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const deletProduct = async (req: Request, res: Response) => {  
  connection.query('DELETE FROM productos WHERE id_producto = ' + req.params.id_producto, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const updateProduct = async (req: Request, res: Response) => {  
  connection.query('UPDATE productos SET ? WHERE id_producto = ' + req.body.id_producto, req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};
