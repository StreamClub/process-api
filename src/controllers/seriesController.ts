import { Request } from '@models';
import { SERIES_URL } from '@config';
import { GetSeasonDto, GetSeriesDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';

class SeriesController {

    public async searchSeries(req: Request<SearchContentDto>) {
        return await authorizedGet(`${SERIES_URL}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getSeries(req: Request<GetSeriesDto>) {
        return await authorizedGet(`${SERIES_URL}/${req.params.seriesId}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getSeason(req: Request<GetSeasonDto>) {
        return await authorizedGet(`${SERIES_URL}/${req.params.seriesId}/seasons/${req.params.seasonId}`,
            req.headers.authorization, {
            ...req.query,
        });
    }

}

const seriesController = new SeriesController();

export { seriesController };
