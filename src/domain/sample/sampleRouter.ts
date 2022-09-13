import { Router } from 'express';
import { getSample } from './sampleController';

const router = Router();

router.get('/', getSample);

router.get('/error', () => {
  setTimeout(() => {
    throw new Error('myError');
  }, 0);
});

export default router;
