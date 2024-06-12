import { privacyController } from '@controllers'
import { handleRequest, validateJWT, } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

export function PrivacyRouter() {
    const router = Router()

    router.get(
        '/',
        validateJWT,
        handleRequest((req) => privacyController.getPrivacy(req), StatusCodes.CREATED)
    )

    router.patch(
        '/watchlist',
        validateJWT,
        handleRequest((req) => privacyController.updateWatchlistPrivacy(req), StatusCodes.CREATED)
    )

    router.patch(
        '/seenContent',
        validateJWT,
        handleRequest((req) => privacyController.updateSeenContentPrivacy(req), StatusCodes.CREATED)
    )

    return router
}
