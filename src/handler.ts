// dependencies
import serverless from 'serverless-http';
import apiServer from './api/server';

// Inject dependencies

// public
const handler = serverless(apiServer);
export const run = async (event: any, context: any) => {
  // Inject before response
  context.callbackWaitsForEmptyEventLoop = false;

  const response = await handler(event, context);

  // Inject afeter responseponse
  return response;
};