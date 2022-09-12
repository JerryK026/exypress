import { Router } from 'express';
import { getSample } from './sampleController';

const router = Router();

router.get('/', getSample);

export default router;
