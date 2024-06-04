import { Request } from '@models';
import { GET_USER_NAMES_URL, POINTS_PER_REVIEW, POINTS_URL, REVIEWS_URL } from '@config';
import { authorizedDel, authorizedGet, authorizedPatch, authorizedPut } from 'utils';

class ReviewController {

    public async addReview(req: Request<any>) {
        const response = await authorizedPut(`${REVIEWS_URL}`, req.headers.authorization, {
            ...req.body,
        });
        await authorizedPatch(`${POINTS_URL}`, req.headers.authorization, {
            "amount": POINTS_PER_REVIEW,
        });
        return response;
    }

    public async deleteReview(req: Request<any>) {
        return await authorizedDel(`${REVIEWS_URL}`, req.headers.authorization, {
            ...req.body,
        });
    }

    public async getReviewsByUserId(req: Request<any>) {
        return await authorizedGet(`${REVIEWS_URL}/users/${req.params.userId}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getReviewsByMovieId(req: Request<any>) {
        const reviews = await authorizedGet(`${REVIEWS_URL}/content/movies/${req.params.movieId}`,
            req.headers.authorization, {
            ...req.query,
        });
        return {
            ...reviews,
            results: await this.getReviewsWithUserNames(reviews, req),

        };
    }

    public async getReviewsBySeriesId(req: Request<any>) {
        const reviews = await authorizedGet(`${REVIEWS_URL}/content/series/${req.params.seriesId}`,
            req.headers.authorization, {
            ...req.query,
        });
        return {
            ...reviews,
            results: await this.getReviewsWithUserNames(reviews, req),

        };
    }

    private async getReviewsWithUserNames(reviews: any, req: Request<any>) {
        if (reviews.results.length === 0) {
            return [];
        }
        const userIds: string = reviews.results.map((review: any) => review.userId).join(',');
        const users = await authorizedGet(`${GET_USER_NAMES_URL}`, req.headers.authorization, {
            userIds,
        });
        return reviews.results.map((review: any) => {
            const user = users.find((u: any) => u.id === review.userId);
            return {
                ...review,
                userName: user ? user.userName : null,
            };
        });
    }

}

export const reviewController = new ReviewController();
