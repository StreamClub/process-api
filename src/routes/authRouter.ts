import {
    FieldOptions,
    handleRequest,
    validateSchema,
  } from "@middlewares";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateUserSchema, LoginSchema, RefreshCredentialsSchema, sendVerificationCodeSchema } from "@dtos";
import { authController } from "@controllers";

export function AuthRouter() {
    const router = Router();

    router.post(
      "/register",
      validateSchema(CreateUserSchema, [FieldOptions.body]),
      handleRequest(
        (req) => authController.register(req),
        StatusCodes.CREATED
      )
    );

    router.post(
      "/login",
      validateSchema(LoginSchema, [FieldOptions.body]),
      handleRequest(
        (req) => authController.login(req),
        StatusCodes.OK
      )
    );

    router.post(
        "/refreshCredentials",
        validateSchema(RefreshCredentialsSchema, [FieldOptions.body]),
        handleRequest(
            (req) => authController.refreshCredentials(req),
            StatusCodes.OK
        )
    );

    router.post(
        "/sendVerificationCode",
        validateSchema(sendVerificationCodeSchema, [FieldOptions.body]),
        handleRequest(
            (req) => authController.sendVerificationCode(req),
            StatusCodes.CREATED
        )
    )


    return router;
}
