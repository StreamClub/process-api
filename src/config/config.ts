import dotenv from 'dotenv';

type Config = {
  port: number;
  uapiUrl: string;
  capiUrl: string;
  tokenKey: string;
};

dotenv.config();

export const config: Config = {
  port: Number(process.env.PORT) || 8080,
  uapiUrl: process.env.UAPI_URL || 'http://localhost:8081',
  capiUrl: process.env.CAPI_URL || 'http://localhost:8082',
  tokenKey: process.env.TOKEN_KEY || 'secret',
};
