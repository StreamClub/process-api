import { handleRequest, validateJWT } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { seenContentController } from '@controllers'

export function SeenContentRouter() {
    const router = Router()

    router.get(
        "/",
        handleRequest((req) => seenContentController.getAllSeenContent(req), StatusCodes.OK)
    )

    router.get(
        '/:userId',
        validateJWT,
        handleRequest((req) => seenContentController.getSeenContent(req), StatusCodes.OK)
    )

    router.put(
        '/movies/:movieId',
        validateJWT,
        handleRequest((req) => seenContentController.addMovie(req), StatusCodes.CREATED)
    )

    router.delete(
        '/movies/:movieId',
        validateJWT,
        handleRequest((req) => seenContentController.removeMovie(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId',
        validateJWT,
        handleRequest((req) => seenContentController.addSeries(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId',
        validateJWT,
        handleRequest((req) => seenContentController.removeSeries(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId/seasons/:seasonId',
        validateJWT,
        handleRequest((req) => seenContentController.addSeason(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId/seasons/:seasonId',
        validateJWT,
        handleRequest((req) => seenContentController.removeSeason(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId/seasons/:seasonId/episodes/:episodeId',
        validateJWT,
        handleRequest((req) => seenContentController.addEpisode(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId/seasons/:seasonId/episodes/:episodeId',
        validateJWT,
        handleRequest((req) => seenContentController.removeEpisode(req), StatusCodes.OK)
    )

    return router
}
