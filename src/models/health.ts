// dependencies
import { IncomingHttpHeaders } from 'http';

// Inject dependencies

export type Health = {
  build : string;
  status : string;
  release : string;
  service : string;
};

export type HealthNetwork = {
  ip : string;
  headers : IncomingHttpHeaders;
} & Health;

// Inject model
export type HealthDb = {
  date : string;
} & Health;
