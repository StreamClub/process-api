import { Request } from '@models';
import { REVIEWS_URL } from '@config';
import { authorizedDel, authorizedGet, authorizedPut } from 'utils';

class ReviewController {

    public async addReview(req: Request<any>) {
        return await authorizedPut(`${REVIEWS_URL}`, req.headers.authorization, {
            ...req.body,
        });
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
        return await authorizedGet(`${REVIEWS_URL}/content/movies/${req.params.movieId}`,
            req.headers.authorization, {
            ...req.query,
        });
    }

    public async getReviewsBySeriesId(req: Request<any>) {
        return await authorizedGet(`${REVIEWS_URL}/content/series/${req.params.seriesId}`,
            req.headers.authorization, {
            ...req.query,
        });
    }

}

export const reviewController = new ReviewController();
