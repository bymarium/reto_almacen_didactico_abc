import { Request, Response } from 'express';
import connection from '..';

export const createCategory = async (req: Request, res: Response) => {
  console.log(req.body);
  
  connection.query('INSERT INTO categorias SET ?', req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const getCategories = async (req: Request, res: Response) => {  
  connection.query('SELECT * FROM categorias', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const deletCategory = async (req: Request, res: Response) => {  
  connection.query('DELETE FROM categorias WHERE id_categoria = ' + req.params.id_categoria, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const updateCategory = async (req: Request, res: Response) => {  
  connection.query('UPDATE categorias SET ? WHERE id_categoria = ' + req.body.id_categoria, req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};
