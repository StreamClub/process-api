import Joi from "joi";

export class GetSeasonDto {
    seriesId: number;
    seasonId: number;
    country: string;
}

export const GetSeasonSchema = Joi.object({
    seriesId: Joi.number().required(),
    seasonId: Joi.number().required(),
    country: Joi.string().required(),
});
