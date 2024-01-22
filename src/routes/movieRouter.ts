import { movieController } from "@controllers";
import { GetMovieSchema, SearchMovieSchema } from "@dtos";
import {
    FieldOptions,
    handleRequest, validateSchema,
  } from "@middlewares";
import { validateJWT } from "@middlewares/validateJwt";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";


export function MovieRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        validateSchema(SearchMovieSchema, [FieldOptions.query]),
        handleRequest(
            (req) => movieController.searchMovie(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:movieId",
        validateJWT,
        validateSchema(GetMovieSchema, [FieldOptions.params, FieldOptions.query]),
        handleRequest(
            (req) => movieController.getMovie(req),
            StatusCodes.OK
        )
    );


    return router;
}
