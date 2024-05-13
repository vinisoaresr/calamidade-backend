// dependencies
import { Router } from 'express';
const router = Router();

// controllers
import * as healthRetrieveController from '../controllers/health/retrieve.controller';

// routes
// health/server
router.get('/server', healthRetrieveController.serverCheck);

export default router;
