// dependencies
import { IncomingHttpHeaders } from 'http';
import {
  // Inject model
  HealthNetwork
} from '../../models/health';

// Inject dependencies

export interface IHealthRepository {
  checkNetwork(headers: IncomingHttpHeaders): Promise<HealthNetwork>

  // Inject methods
}