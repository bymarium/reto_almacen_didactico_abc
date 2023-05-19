import { Request, Response } from 'express';

export const exampleController = (req: Request, res: Response) => {
  res.send('Esta es una ruta de ejemplo');
};
