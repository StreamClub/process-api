import { reviewController } from '@controllers'
import { handleRequest, validateJWT, } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

export function ReviewRouter() {
    const router = Router()

    router.put(
        '/',
        validateJWT,
        handleRequest((req) => reviewController.addReview(req), StatusCodes.CREATED)
    )

    router.delete(
        '/',
        validateJWT,
        handleRequest((req) => reviewController.deleteReview(req), StatusCodes.OK)
    )

    router.get(
        "/users/:userId",
        validateJWT,
        handleRequest((req) => reviewController.getReviewsByUserId(req), StatusCodes.OK)
    )

    router.get(
        "/content/movies/:movieId",
        validateJWT,
        handleRequest((req) => reviewController.getReviewsByMovieId(req), StatusCodes.OK)
    )

    router.get(
        "/content/series/:seriesId",
        validateJWT,
        handleRequest((req) => reviewController.getReviewsBySeriesId(req), StatusCodes.OK)
    )

    return router
}
