// dependencies
import { Router } from 'express';
const router = Router();

// private
const _basePath     = '/v1/api';

// routes
import healthRouter from './_health';
router.use(`${_basePath}/health`, healthRouter);

// Inject api routes

export default router;