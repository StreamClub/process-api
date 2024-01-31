import { AuthRouter, HealthRouter, MovieRouter, SeriesRouter, WatchlistRouter, ArtistRouter } from "@routes";
import { Express } from "express";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/auth", AuthRouter());
  app.use("/movies", MovieRouter());
  app.use("/series", SeriesRouter());
  app.use("/watchlist", WatchlistRouter());
  app.use("/artists", ArtistRouter());
}
