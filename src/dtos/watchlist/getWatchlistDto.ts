import Joi from "joi";

export class GetWatchlistDto {
    userId: string;
    page: number;
    pageSize: number;
}

export const GetWatchlistSchema = Joi.object({
    userId: Joi.number().required(),
    page: Joi.number().optional(),
    pageSize: Joi.number().optional(),
});
