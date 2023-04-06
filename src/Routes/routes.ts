import express, { Request, Response } from 'express';
import fs from 'fs';

const routes = express.Router();

const initialPage = fs.readFileSync('./index.html', { encoding: 'utf-8' });

routes.get('/', (req: Request, res: Response) => {
  res.send(initialPage);
});

export default routes;