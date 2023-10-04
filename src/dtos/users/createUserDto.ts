import Joi from "joi";

export class CreateUserDto {
    email: string;
    password: string
}

export const CreateUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
