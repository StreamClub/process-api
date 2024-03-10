import { handleRequest, validateJWT } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { userController } from '@controllers'

export function UserRouter() {
    const router = Router()

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

    return router
}
