import express from 'express';
import apiService from '../src/';

export const routers = (app: express.Application) => {
  app.use('/api/v1', apiService);
};

export default routers;
