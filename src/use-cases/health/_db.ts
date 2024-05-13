import { inject, injectable } from 'tsyringe';

import { HealthDb } from '../../models/health';
import { IHealthRepository } from '../../repositories/health/IHealthRepository';

@injectable()
class HealthDbUseCase {
  constructor(
    @inject('HealthRepository')
    private healthRepository: IHealthRepository
  ) {}

  public async execute(): Promise<HealthDb> {
    const result = await this.healthRepository.checkDb();
    return result;
  }
}

export { HealthDbUseCase };
