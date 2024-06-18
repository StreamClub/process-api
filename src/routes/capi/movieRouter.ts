import { movieController } from "@controllers";
import { handleRequest, validateJWT } from "@middlewares";
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
        "/:movieId",
        validateJWT,
        handleRequest(
            (req) => movieController.getMovie(req),
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
