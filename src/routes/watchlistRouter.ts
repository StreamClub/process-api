import { FieldOptions, handleRequest, validateSchema } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { watchlistController } from '@controllers'
import { validateJWT } from '@middlewares'
import { AddContentSchema, GetWatchlistSchema } from '@dtos'

export function WatchlistRouter() {
    const router = Router()

    router.post(
        '/',
        validateJWT,
        handleRequest((req) => watchlistController.create(req), StatusCodes.CREATED)
    )

    router.get(
        '/:userId',
        validateJWT,
        validateSchema(GetWatchlistSchema, [FieldOptions.params, FieldOptions.query]),
        handleRequest((req) => watchlistController.get(req), StatusCodes.OK)
    )

    router.put(
        '/',
        validateJWT,
        validateSchema(AddContentSchema, [FieldOptions.params, FieldOptions.body]),
        handleRequest((req) => watchlistController.addContent(req), StatusCodes.OK)
    )

    router.delete(
        '/',
        validateJWT,
        validateSchema(AddContentSchema, [FieldOptions.params, FieldOptions.body]),
        handleRequest((req) => watchlistController.removeContent(req), StatusCodes.OK)
    )

    return router
}
