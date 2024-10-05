import { movieController } from "@controllers";
import { handleRequest, loadUserContext, validateJWT } from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";


export function MovieRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => movieController.searchMovie(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/discover",
        validateJWT,
        handleRequest(
            (req) => movieController.discoverMovies(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/recommendations",
        validateJWT,
        handleRequest(
            (req) => movieController.getRecommendations(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/similar",
        validateJWT,
        handleRequest(
            (req) => movieController.getSimilarMovies(req),
            StatusCodes.OK
        )
    )

    router.get(
        "/:movieId",
        validateJWT,
        loadUserContext,
        handleRequest(
            (req, res) => movieController.getMovie(req, res),
            StatusCodes.OK
        )
    );

    router.get(
        "/:movieId/recommendations",
        validateJWT,
        handleRequest(
            (req) => movieController.getMovieRecommendations(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:movieId/credits",
        validateJWT,
        handleRequest(
            (req) => movieController.getCredits(req),
            StatusCodes.OK
        )
    );


    return router;
}
