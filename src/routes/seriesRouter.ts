import { seriesController } from "@controllers";
import { SearchContentSchema } from "@dtos";
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

    return router;
}
