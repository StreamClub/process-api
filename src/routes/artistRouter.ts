import { artistController } from "@controllers";
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
        handleRequest(
            (req) => artistController.searchArtist(req),
            StatusCodes.OK
        )
    );

    router.get(
        "/:artistId",
        validateJWT,
        handleRequest(
            (req) => artistController.getArtist(req),
            StatusCodes.OK
        )
    );


    return router;
}
