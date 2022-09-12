import { logger } from '@exypress/loaders/logger';
import express, { NextFunction, Request, Response } from 'express';

export default (app: express.Application) => {
  // API Errors
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(JSON.stringify(err, Object.getOwnPropertyNames(err)));
  });
};
