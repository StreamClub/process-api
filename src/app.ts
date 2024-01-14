import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { pinoHttp } from 'pino-http';
import pinoLogger from "pino";
import { config } from "@config";
import { exceptionToHttpError, toCamelCase } from '@middlewares';
import { registerRouters } from "@routes";

dotenv.config();

async function main() {

  const app = express();

  app.use(pinoHttp());
  app.use(cors());
  app.use(toCamelCase())
  app.use(express.json());
  registerRouters(app);
  app.use(exceptionToHttpError);

  app.listen(config.port, () => {
    const logger = pinoLogger();
    logger.info(`Process API listening on port ${config.port}`);
  });
}

main();
