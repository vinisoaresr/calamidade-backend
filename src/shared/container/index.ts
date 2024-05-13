// dependencies
import { container } from 'tsyringe';

import { HealthRepository } from '../../repositories/health/HealthRepository';
import { IHealthRepository } from '../../repositories/health/IHealthRepository';
container.registerSingleton<IHealthRepository>('HealthRepository', HealthRepository);

// Inject container register
