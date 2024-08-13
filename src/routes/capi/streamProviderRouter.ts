import {
    handleRequest,
    validateJWT,
} from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { streamProviderController } from "@controllers";

export function StreamProviderRouter() {
    const router = Router();

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => streamProviderController.getStreamProviders(req),
            StatusCodes.OK
        )
    );

    router.put(
        '/',
        validateJWT,
        handleRequest((req) => streamProviderController.addProvider(req),
            StatusCodes.CREATED)
    )

    router.delete(
        "/",
        validateJWT,
        handleRequest(
            (req) => streamProviderController.deleteProvider(req),
            StatusCodes.OK
        )
    )

    router.get(
        "/stats",
        validateJWT,
        handleRequest(
            (req, res) => streamProviderController.getStats(req, res),
            StatusCodes.OK
        )
    )

    router.get(
        "/subscribeRecommendations",
        validateJWT,
        handleRequest(
            (req, res) => streamProviderController.getSubscribeRecommendations(req, res),
            StatusCodes.OK
        )
    )

    router.get(
        "/:userId",
        validateJWT,
        handleRequest(
            (req) => streamProviderController.getUserStreamProviders(req),
            StatusCodes.OK
        )
    )

    return router;
}
