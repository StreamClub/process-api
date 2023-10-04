import { Express } from "express";

export function registerRouters(app: Express) {
  app.get("/health", (_, res) => res.status(200).send());
}
