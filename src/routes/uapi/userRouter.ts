import { handleRequest, loadUserContext, validateJWT } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { userController } from '@controllers'

export function UserRouter() {
    const router = Router()

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => userController.search(req),
            StatusCodes.CREATED
        )
    )

    router.get(
        "/:userId",
        validateJWT,
        handleRequest(
            (req) => userController.get(req),
            StatusCodes.CREATED
        )
    )

    router.patch(
        "/",
        validateJWT,
        handleRequest(
            (req) => userController.update(req),
            StatusCodes.CREATED
        )
    )

    router.get(
        "/recommendations/movies",
        validateJWT,
        loadUserContext,
        handleRequest(
            (req, res) => userController.getMovieRecommendations(req, res),
            StatusCodes.CREATED
        )
    )

    router.get(
        "/recommendations/series",
        validateJWT,
        loadUserContext,
        handleRequest(
            (req, res) => userController.getSeriesRecommendations(req, res),
            StatusCodes.CREATED
        )
    )

    return router
}
