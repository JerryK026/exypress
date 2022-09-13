import { Request, Response } from 'express';
import SampleService from './sampleService';

const sampleService = new SampleService();

export const getSample = async (req: Request, res: Response) => {
  const data = await sampleService.getSample();
  return res.status(200).json(data);
};

export const getError = async (req: Request, res: Response) => {
  let e;
  e = await setTimeout(() => {
    throw new Error('my error');
  }, 0);
  return res.status(500).json({ error: e });
};
