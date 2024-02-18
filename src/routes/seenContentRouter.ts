import { FieldOptions, handleRequest, validateJWT, validateSchema } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { seenContentController } from '@controllers'
import { AddSeenEpisodeSchema, AddSeenMovieSchema, AddSeenSeasonSchema, AddSeenSeriesSchema, GetSeenContentSchema } from '@dtos'

export function SeenContentRouter() {
    const router = Router()

    router.get(
        '/:userId',
        validateJWT,
        validateSchema(GetSeenContentSchema, [FieldOptions.params, FieldOptions.query]),
        handleRequest((req) => seenContentController.getSeenContent(req), StatusCodes.OK)
    )

    router.put(
        '/movies/:movieId',
        validateJWT,
        validateSchema(AddSeenMovieSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.addMovie(req), StatusCodes.CREATED)
    )

    router.delete(
        '/movies/:movieId',
        validateJWT,
        validateSchema(AddSeenMovieSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.removeMovie(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId',
        validateJWT,
        validateSchema(AddSeenSeriesSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.addSeries(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId',
        validateJWT,
        validateSchema(AddSeenSeriesSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.removeSeries(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId/seasons/:seasonId',
        validateJWT,
        validateSchema(AddSeenSeasonSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.addSeason(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId/seasons/:seasonId',
        validateJWT,
        validateSchema(AddSeenSeasonSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.removeSeason(req), StatusCodes.OK)
    )

    router.put(
        '/series/:seriesId/seasons/:seasonId/episodes/:episodeId',
        validateJWT,
        validateSchema(AddSeenEpisodeSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.addEpisode(req), StatusCodes.CREATED)
    )

    router.delete(
        '/series/:seriesId/seasons/:seasonId/episodes/:episodeId',
        validateJWT,
        validateSchema(AddSeenEpisodeSchema, [FieldOptions.params]),
        handleRequest((req) => seenContentController.removeEpisode(req), StatusCodes.OK)
    )

    return router
}
