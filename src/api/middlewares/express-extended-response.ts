import { Request, Response, NextFunction } from 'express';
import { response } from '@obi-tec/express-response-models';

export function extendedResponse(req: Request, res: Response, next: NextFunction) {
  res.success = (body, statusCode = 200, headers = null, cache = 0) => {
    return response.success(res, body, statusCode, headers, cache);
  };

  next();
}