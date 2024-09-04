import { GroupController } from "@controllers";
import {
    handleRequest,
    validateJWT,
} from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

export function GroupRouter() {
    const router = Router();
    const groupController = new GroupController();

    router.get(
        "/",
        validateJWT,
        handleRequest(
            (req) => groupController.getUserGroups(req),
            StatusCodes.OK
        )
    );

    router.post(
        "/",
        validateJWT,
        handleRequest(
            (req) => groupController.createGroup(req),
            StatusCodes.CREATED
        )
    );

    router.get(
        "/:id",
        validateJWT,
        handleRequest(
            (req) => groupController.getGroup(req),
            StatusCodes.OK
        )
    );

    router.delete(
        "/:id",
        validateJWT,
        handleRequest(
            (req) => groupController.deleteGroup(req),
            StatusCodes.OK
        )
    );

    return router;
}
