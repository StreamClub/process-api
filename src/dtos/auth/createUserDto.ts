import Joi from "joi";

export class CreateUserDto {
    email: string;
    password: string;
    verificationCode: number;
}

export const CreateUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    verificationCode: Joi.number().required(),
});
