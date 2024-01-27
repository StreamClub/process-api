import { Express } from "express";
import { AuthRouter } from "./authRouter";
import { HealthRouter } from "./healthRouter";
import { MovieRouter } from "./movieRouter";
import { WatchlistRouter } from "./watchlistRouter";
import { SeriesRouter } from "./seriesRouter";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/auth", AuthRouter());
  app.use("/movies", MovieRouter());
  app.use("/series", SeriesRouter());
  app.use("/watchlist", WatchlistRouter());
}
