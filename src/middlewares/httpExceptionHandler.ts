import {
  DomainException,
  NotFoundException,
  UnauthorizedException,
} from '@exceptions';
import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// Don't remove the next parameter, otherwise the middleware is ignored by Express

export function exceptionToHttpError(
  error: Error | AxiosError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  let code: number;
  let description: string;
  let message = error.message;

  if (error instanceof DomainException) {
    code = StatusCodes.CONFLICT;
    description = 'Invalid operation';
  } else if (error instanceof NotFoundException) {
    code = StatusCodes.NOT_FOUND;
    description = 'Not found';
  } else if (error instanceof UnauthorizedException) {
    code = StatusCodes.UNAUTHORIZED;
    description = 'Unauthorized';
  } else if (error instanceof AxiosError) {
    code = error.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;
    description = error.response?.data?.description || 'Internal server error';
    message = error.response?.data?.error || error.message;
  }
  else {
    code = StatusCodes.INTERNAL_SERVER_ERROR;
    description = 'Internal server error';
  }
  res.status(code).json({
    error: message,
    statusCode: code,
    description,
  });
}
