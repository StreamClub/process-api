import dotenv from 'dotenv';

type Config = {
  port: number;
  uapiUrl: string;
  capiUrl: string;
  rapiUrl: string;
  tokenKey: string;
  rapiSecret: string;
};

dotenv.config();

export const config: Config = {
  port: Number(process.env.PORT) || 8080,
  uapiUrl: process.env.UAPI_URL || 'http://localhost:8081',
  capiUrl: process.env.CAPI_URL || 'http://localhost:8082',
  rapiUrl: process.env.RAPI_URL || 'http://localhost:8083',
  tokenKey: process.env.TOKEN_KEY || 'secret',
  rapiSecret: process.env.RAPI_SECRET || 'secret'
};
