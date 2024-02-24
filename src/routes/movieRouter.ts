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
        "/:movieId",
        validateJWT,
        handleRequest(
            (req) => movieController.getMovie(req),
            StatusCodes.OK
        )
    );


    return router;
}
