// dependencies
import logger from '@obi-tec/logger-console';
import { IncomingHttpHeaders } from 'http';

import { IHealthRepository } from './IHealthRepository';
import {
  // Inject model
  HealthDb,
  HealthNetwork
} from '../../models/health';

// Inject dependencies
import { ConnectionDB } from '../../services/database';

export class HealthRepository implements IHealthRepository {
  async checkNetwork(headers: IncomingHttpHeaders): Promise<HealthNetwork> {
    try {
      const result = await (await fetch('https://api.ipify.org?format=json')).json();

      return {
        build   : process.env.HEALTH_BUILD || 'not-set',
        status  : 'OK',
        release : process.env.HEALTH_RELEASE || 'not-set',
        service : 'network',
        ip      : result.ip,
        headers : headers
      };
    } catch (error) {
      logger.error('Error in network', error);
      throw new Error('Error in network');
    }
  }

  // Inject methods
  async checkDb(): Promise<HealthDb> {
    const result = await ConnectionDB.$queryRaw`SELECT NOW() AS time;` as any[];
    return {
      build   : process.env.HEALTH_BUILD || 'not-set',
      status  : 'OK',
      release : process.env.HEALTH_RELEASE || 'not-set',
      service : 'db',

      date: result[0].time.toString()
    };
  }

}