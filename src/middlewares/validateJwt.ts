import { config } from '@config';
import { UnauthorizedException } from '@exceptions';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function validateJWT(req: Request, res: Response, next: NextFunction) {
  const jwtToken = req.headers.authorization?.substring('Bearer '.length);
  if (!jwtToken) {
    throw new UnauthorizedException('Missing auth token');
  }
  try {
    jwt.verify(jwtToken, config.tokenKey)
    next();
  } catch (err) {
    throw new UnauthorizedException('Invalid auth token');
  }
}

export function loadUserContext(req: Request, res: Response, next: NextFunction) {
  const jwtToken = req.headers.authorization?.substring('Bearer '.length);
  if (!jwtToken) {
    throw new UnauthorizedException('Missing auth token');
  }
  try {
    const userContext = jwt.decode(jwtToken) as { userId: string };
    res.locals.userId = userContext.userId;
    next();
  } catch (err) {
    throw new UnauthorizedException('Invalid auth token');
  }
}