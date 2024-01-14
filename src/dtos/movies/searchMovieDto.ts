import Joi from "joi";

export class SearchMovieDto {
    query: string;
    page: number;
}

export const SearchMovieSchema = Joi.object({
    query: Joi.string().required(),
    page: Joi.number(),
});
