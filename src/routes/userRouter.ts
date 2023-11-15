import {
    FieldOptions,
    handleRequest,
    validateSchema,
  } from "@middlewares";
import { Request } from "@models";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CreateUserSchema, LoginSchema } from "@dtos";
import { userController } from "@controllers";

export function UserRouter() {
    const router = Router();

    router.post(
      "/register",
      validateSchema(CreateUserSchema, [FieldOptions.body]),
      handleRequest(
        (req) => userController.register(req),
        StatusCodes.CREATED
      )
    );

    router.post(
      "/login",
      validateSchema(LoginSchema, [FieldOptions.body]),
      handleRequest(
        (req) => userController.login(req),
        StatusCodes.OK
      )
    );

    return router;
}
