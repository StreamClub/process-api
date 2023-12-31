import {
    handleRequest,
  } from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { healthController } from "@controllers";


export function HealthRouter() {
    const router = Router();

    router.get(
        "/",
        (_, res) => res.status(200).send()
    );

    router.get(
        "/wakeUpServices",
        handleRequest(
            (_) => healthController.wakeUpServices(),
            StatusCodes.OK
        )
    );

    return router;
}
