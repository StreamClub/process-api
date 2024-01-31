import { seriesController } from "@controllers";
import { GetSeasonSchema, GetSeriesSchema, SearchContentSchema } from "@dtos";
import {
    FieldOptions,
    handleRequest, validateSchema,
} from "@middlewares";
import { validateJWT } from "@middlewares/validateJwt";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export function SeriesRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        validateSchema(SearchContentSchema, [FieldOptions.query]),
        handleRequest(
            (req) => seriesController.searchSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId",
        validateJWT,
        validateSchema(GetSeriesSchema, [FieldOptions.query, FieldOptions.params]),
        handleRequest(
            (req) => seriesController.getSeries(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:seriesId/seasons/:seasonId",
        validateJWT,
        validateSchema(GetSeasonSchema, [FieldOptions.query, FieldOptions.params]),
        handleRequest(
            (req) => seriesController.getSeason(req),
            StatusCodes.OK
        )
    );

    return router;
}
