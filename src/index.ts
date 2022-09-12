import { Router } from 'express';
import SampleRouter from './domain/sample/sampleRouter';

const router = Router();

router.use('/test', SampleRouter);

export default router;
