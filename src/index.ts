import { Router } from 'express';
import { getSample } from './domain/sample/sampleController';

const router = Router();

router.get('/test', getSample);

export default router;
