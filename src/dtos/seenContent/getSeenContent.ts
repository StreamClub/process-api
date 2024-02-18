import Joi from "joi";

export class GetSeenContentDto {
    userId: string;
    page: number;
    pageSize: number;
}

export const GetSeenContentSchema = Joi.object({
    userId: Joi.number().required(),
    page: Joi.number().optional(),
    pageSize: Joi.number().optional(),
});
