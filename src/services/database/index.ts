// dependencies
import { PrismaClient as PrismaClientModule } from '../database/prisma/generated/clientModules';

// envs
const { NODE_ENV, DATABASE_URL } = process.env;

const ConnectionDB: PrismaClientModule = new PrismaClientModule({
  datasources: {
    db: { url: `${DATABASE_URL}` }
  },
  log: NODE_ENV !== 'production' ? [{ emit: 'stdout', level: 'query' }] : []
});

export {
  ConnectionDB
};