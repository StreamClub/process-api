import {
    handleRequest,
    validateJWT,
} from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { FriendController } from "@controllers";

export function FriendRouter() {
    const router = Router();
    const friendController = new FriendController();

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => friendController.getFriendList(req),
            StatusCodes.OK
        )
    )

    router.delete(
        "/:userId",
        validateJWT,
        handleRequest(
            (req) => friendController.deleteFriend(req),
            StatusCodes.OK
        )
    )

    router.get(
        "/requests",
        validateJWT,
        handleRequest(
            (req) => friendController.getFriendRequest(req),
            StatusCodes.OK
        )
    )

    router.delete(
        "/requests/:requestId",
        validateJWT,
        handleRequest(
            (req) => friendController.deleteFriendRequest(req),
            StatusCodes.OK
        )
    )

    router.post(
        "/requests/:userId",
        validateJWT,
        handleRequest(
            (req) => friendController.sendFriendRequest(req),
            StatusCodes.OK
        )
    )

    return router;
}
