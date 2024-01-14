import { Express } from "express";
import { AuthRouter } from "./authRouter";
import { HealthRouter } from "./healthRouter";
import { MovieRouter } from "./movieRouter";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/auth", AuthRouter());
  app.use("/movies", MovieRouter());
}
