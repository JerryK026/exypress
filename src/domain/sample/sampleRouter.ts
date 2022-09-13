import { Router } from 'express';
import { getSample, validateSample } from './sampleController';

import { Error404, Error500 } from '../../../common/error/HttpErrors';
import DBError from '../../../common/error/DBError';

import { userValidate } from './sampleValidator';

const router = Router();

router.get('/', getSample);

router.get('/error/404', () => {
  throw new Error404('DGT is not here');
});

router.get('/error/500', () => {
  throw new Error500('myError');
});

router.get('/error/db', () => {
  throw new DBError('DGT broke my DB');
});

router.get('/validate/:id', userValidate, validateSample);

export default router;
