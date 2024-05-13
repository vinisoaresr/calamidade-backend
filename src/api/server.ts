// dependency
import 'reflect-metadata';
import '../shared/container';

// dependencies
import express, { Request, Response, NextFunction } from 'express';
import { ErrorHttp } from '@obi-tec/express-response-models';
import logger from '@obi-tec/logger-console';
import 'express-async-errors';
import multer from 'multer';

// extendeds
import { extendedResponse } from './middlewares/express-extended-response';

// express
const api = express();

api.use(express.json());
api.use(express.text());
api.use(express.urlencoded({ extended: true }));
api.use(extendedResponse);
api.use(multer({ storage: multer.memoryStorage() }).any());

// cors
api.use(function (req: Request, res: Response, next: NextFunction) {
  const requestPayload: logger.Request = {
    url    : req.url,
    method : req.method
  };
  logger.request(requestPayload);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});

api.use(function (req: Request, res: Response, next: NextFunction) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    req.headers.authorization = req.headers.authorization.split(' ')[1];
  }

  if (!req.headers['accept-language']) {
    req.headers['accept-language'] = 'en-US';
    res.setHeader('accept-language', 'en-US');
  }

  next();
});

// configure route
import routes from './routes';
api.use(routes);

api.use(function (req: Request, res: Response, next: NextFunction) {
  res.status(404).json({
    message : 'Route not found',
    code    : 'route-not-found'
  });

  next();
});

api.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(`Error executing request ${req.originalUrl}`, err);

  if (err.name === 'ZodError') {
    res.status(400).json({
      code    : 'client-body-error',
      message : 'The request was not accepted because there is some iconsistence in some field of the body.',
      issues  : err.issues
    });
  } else if (err instanceof ErrorHttp) {
    res.status(err.httpStatusCode).json({
      message : err.message,
      code    : err.businessStatusCode
    });
  } else {
    res.status(500).json({
      message : 'Internal server error',
      code    : 'internal-server-error'
    });
  }

  next();
});

// export the api
export default api;