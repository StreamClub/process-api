import { Request } from '@models';
import { SEEN_CONTENT_URL, config } from '@config';
import { authorizedDel, authorizedGet, authorizedPut } from 'utils';

class SeenContentController {

    public async getSeenContent(req: Request<any>) {
        return await authorizedGet(`${SEEN_CONTENT_URL}/${req.params.userId}`, req.headers.authorization);
    }

    public async addMovie(req: Request<any>) {
        return await authorizedPut(`${SEEN_CONTENT_URL}/movies/${req.params.movieId}`,
            req.headers.authorization);
    };

    public async removeMovie(req: Request<any>) {
        return await authorizedDel(`${SEEN_CONTENT_URL}/movies/${req.params.movieId}`,
            req.headers.authorization);
    };

    public async addSeries(req: Request<any>) {
        return await authorizedPut(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}`,
            req.headers.authorization);
    };

    public async removeSeries(req: Request<any>) {
        return await authorizedDel(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}`,
            req.headers.authorization);
    };

    public async addSeason(req: Request<any>) {
        return await authorizedPut(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}/seasons/${req.params.seasonId}`,
            req.headers.authorization);
    };

    public async removeSeason(req: Request<any>) {
        return await authorizedDel(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}/seasons/${req.params.seasonId}`,
            req.headers.authorization);
    };

    public async addEpisode(req: Request<any>) {
        return await authorizedPut(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}/seasons/${req.params.seasonId}/episodes/${req.params.episodeId}`,
            req.headers.authorization);
    };

    public async removeEpisode(req: Request<any>) {
        return await authorizedDel(`${SEEN_CONTENT_URL}/series/${req.params.seriesId}/seasons/${req.params.seasonId}/episodes/${req.params.episodeId}`,
            req.headers.authorization);
    };

}

const seenContentController = new SeenContentController();

export { seenContentController };
