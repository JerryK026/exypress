import { Request, Response } from 'express';
import SampleService from './sampleService';

const sampleService = new SampleService();

export const getSample = async (req: Request, res: Response) => {
  const data = await sampleService.getSample();
  return res.status(200).json(data);
};
