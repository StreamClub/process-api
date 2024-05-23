import { handleRequest } from '@middlewares'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import { authController } from '@controllers'

export function AuthRouter() {
    const router = Router()

    router.post(
        '/register',
        handleRequest(
            (req) => authController.register(req),
            StatusCodes.CREATED
        )
    )

    router.post(
        '/login',
        handleRequest((req) => authController.login(req), StatusCodes.OK)
    )

    router.post(
        '/login/google',
        handleRequest((req) => authController.loginWithGoogle(req), StatusCodes.OK)
    )

    router.post(
        '/refreshCredentials',
        handleRequest(
            (req) => authController.refreshCredentials(req),
            StatusCodes.OK
        )
    )

    router.post(
        '/sendVerificationCode',
        handleRequest(
            (req) => authController.sendVerificationCode(req),
            StatusCodes.CREATED
        )
    )

    return router
}
