import Joi from "joi";

export class SearchContentDto {
    query: string;
    page: number;
}

export const SearchContentSchema = Joi.object({
    query: Joi.string().required(),
    page: Joi.number(),
});
