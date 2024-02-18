import { artistController } from "@controllers";
import { GetArtistSchema, SearchContentSchema } from "@dtos";
import {
    FieldOptions,
    handleRequest, validateSchema,
} from "@middlewares";
import { validateJWT } from "@middlewares/validateJwt";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";


export function ArtistRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        validateSchema(SearchContentSchema, [FieldOptions.query]),
        handleRequest(
            (req) => artistController.searchArtist(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:artistId",
        validateJWT,
        validateSchema(GetArtistSchema, [FieldOptions.params, FieldOptions.query]),
        handleRequest(
            (req) => artistController.getArtist(req),
            StatusCodes.OK
        )
    );


    return router;
}
