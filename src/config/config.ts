import dotenv from 'dotenv';

type Config = {
  port: number;
  uapiUrl: string;
};

dotenv.config();

export const config: Config = {
  port: Number(process.env.PORT) || 8080,
  uapiUrl: process.env.UAPI_URL || 'http://localhost:8081',
};
