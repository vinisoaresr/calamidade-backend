import { Request } from 'express';
import { inject, injectable } from 'tsyringe';

import { HealthNetwork } from '../../models/health';
import { IHealthRepository } from '../../repositories/health/IHealthRepository';

@injectable()
class HealthNetworkUseCase {
  constructor(
    @inject('HealthRepository')
    private healthRepository: IHealthRepository
  ) {}

  public async execute(req: Request): Promise<HealthNetwork> {
    const result = await this.healthRepository.checkNetwork(req.headers);
    return result;
  }
}

export { HealthNetworkUseCase };
