import { handleRequest } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { watchlistController } from '@controllers'
import { validateJWT } from '@middlewares'

export function WatchlistRouter() {
    const router = Router()
    router.get(
        '/:userId',
        validateJWT,
        handleRequest((req) => watchlistController.get(req), StatusCodes.OK)
    )

    router.put(
        '/',
        validateJWT,
        handleRequest(
            (req) => watchlistController.addContent(req),
            StatusCodes.OK
        )
    )

    router.delete(
        '/',
        validateJWT,
        handleRequest(
            (req) => watchlistController.removeContent(req),
            StatusCodes.OK
        )
    )

    return router
}
