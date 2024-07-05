import { handleRequest, validateJWT } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { triviaController } from '@controllers'

export function TriviaRouter() {
    const router = Router()

    router.get(
        "/",
        validateJWT,
        handleRequest((req, res) => triviaController.getTrivias(req), StatusCodes.OK)
    );

    router.get(
        "/:contentType/:contentId",
        validateJWT,
        handleRequest((req, res) => triviaController.getTrivia(req), StatusCodes.OK)
    );

    return router
}
