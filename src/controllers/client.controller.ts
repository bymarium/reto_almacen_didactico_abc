import { Request, Response } from 'express';
import connection from '..';

export const createClient = async (req: Request, res: Response) => {
  console.log(req.body);
  
  connection.query('INSERT INTO clientes SET ?', req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const getClients = async (req: Request, res: Response) => {  
  connection.query('SELECT * FROM clientes', (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const deletClient = async (req: Request, res: Response) => {  
  connection.query('DELETE FROM productos WHERE documento = ' + req.params.documento, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};

export const updateClient = async (req: Request, res: Response) => {  
  connection.query('UPDATE clientes SET ? WHERE documento = ' + req.body.documento, req.body, (error, results) => {
    if (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).send('Error al obtener datos');
      return;
    }

    res.json(results);
  });
};
