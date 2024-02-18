import { handleRequest, validateJWT } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import {
    CreateUserSchema,
    LoginSchema,
    RefreshCredentialsSchema,
    sendVerificationCodeSchema,
} from '@dtos'
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

    return router
}
