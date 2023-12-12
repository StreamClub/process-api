import { Express } from "express";
import { UserRouter } from "./userRouter";
import { HealthRouter } from "./healthRouter";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/users", UserRouter());
}
