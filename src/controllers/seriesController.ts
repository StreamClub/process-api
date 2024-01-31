import { Request } from '@models';
import { config } from '@config';
import { GetSeasonDto, GetSeriesDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';

class SeriesController {

    private SERIES_URL = `${config.capiUrl}/series`;

    public async searchSeries(req: Request<SearchContentDto>) {
        return await authorizedGet(`${this.SERIES_URL}`, req.headers.authorization, {
            query: req.query.query,
            page: req.query.page,
        });
    }

    public async getSeries(req: Request<GetSeriesDto>) {
        return await authorizedGet(`${this.SERIES_URL}/${req.params.seriesId}`, req.headers.authorization, {
            country: req.query.country,
        });
    }

    public async getSeason(req: Request<GetSeasonDto>) {
        return await authorizedGet(`${this.SERIES_URL}/${req.params.seriesId}/seasons/${req.params.seasonId}`,
            req.headers.authorization, {
            country: req.query.country,
        });
    }

}

const seriesController = new SeriesController();

export { seriesController };
