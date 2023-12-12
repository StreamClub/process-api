import { Express } from "express";
import { AuthRouter } from "./authRouter";
import { HealthRouter } from "./healthRouter";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/auth", AuthRouter());
}
