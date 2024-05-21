import {
  AuthRouter, HealthRouter, MovieRouter,
  SeriesRouter, WatchlistRouter, ArtistRouter, SeenContentRouter,
  UserRouter, StreamProviderRouter, ReviewRouter,
  FriendRouter
} from "@routes";
import { Express } from "express";

export function registerRouters(app: Express) {
  app.use("/health", HealthRouter());
  app.use("/auth", AuthRouter());
  app.use("/movies", MovieRouter());
  app.use("/series", SeriesRouter());
  app.use("/watchlist", WatchlistRouter());
  app.use("/artists", ArtistRouter());
  app.use("/seenContent", SeenContentRouter());
  app.use("/users", UserRouter());
  app.use("/streamProviders", StreamProviderRouter());
  app.use("/reviews", ReviewRouter());
  app.use("/friends", FriendRouter());
}
