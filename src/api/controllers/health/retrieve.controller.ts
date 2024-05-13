// dependencies
import { container } from 'tsyringe';
import { Request, Response } from 'express';

import * as healthUseCases from '../../../use-cases/health';

export async function serverCheck(req: Request, res: Response) {
  const healthServerUseCase = container.resolve(healthUseCases.HealthNetworkUseCase);
  const result              = await healthServerUseCase.execute(req);
  return res.send(result);
}

// Inject function
export async function dbCheck(req: Request, res: Response) {
  const dbUseCase = container.resolve(healthUseCases.HealthDbUseCase);
  const result    = await dbUseCase.execute();
  return res.send(result);
}
