import Joi from "joi";

export class GetMovieDto {
    movieId: string;
    country: string;
}

export const GetMovieSchema = Joi.object({
    movieId: Joi.number().required(),
    country: Joi.string().required(),
});
