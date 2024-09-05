import { Request, Response } from 'express';

const helloController = (req: Request, res: Response): void => {
  res.send('Hi');
};

export default helloController;
