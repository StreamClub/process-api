import { movieController } from "@controllers";
import { GetMovieSchema } from "@dtos";
import {
    FieldOptions,
    handleRequest, validateSchema,
  } from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";


export function MovieRouter() {
    const router = Router();

    // router.get(
    //     "/search",
    //     validateSchema(SearchMovieSchema, [FieldOptions.query]),
    //     handleRequest(
    //         // (req) => movieController.searchMovie(req),
    //         StatusCodes.OK
    //     )
    // );

    router.get(
        "/:movieId",
        validateSchema(GetMovieSchema, [FieldOptions.params, FieldOptions.query]),
        handleRequest(
            (req) => movieController.getMovie(req),
            StatusCodes.OK
        )
    );


    return router;
}
