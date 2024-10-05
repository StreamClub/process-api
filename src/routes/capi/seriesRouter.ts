import { seriesController } from "@controllers";
import { handleRequest, validateJWT } from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export function SeriesRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => seriesController.searchSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/discover",
        validateJWT,
        handleRequest(
            (req) => seriesController.discoverSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/recommendations",
        validateJWT,
        handleRequest(
            (req) => seriesController.getRecommendations(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/similar",
        validateJWT,
        handleRequest(
            (req) => seriesController.getSimilarSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId",
        validateJWT,
        handleRequest(
            (req) => seriesController.getSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId/recommendations",
        validateJWT,
        handleRequest(
            (req) => seriesController.getSeriesRecommendations(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId/credits",
        validateJWT,
        handleRequest(
            (req) => seriesController.getCredits(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId/seasons/:seasonId",
        validateJWT,
        handleRequest(
            (req) => seriesController.getSeason(req),
            StatusCodes.OK
        )
    );

    return router;
}
