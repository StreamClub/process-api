import { Request } from '@models';
import { SERIES_REC_URL, SERIES_URL, config } from '@config';
import { GetSeasonDto, GetSeriesDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';

class SeriesController {

    private async getSeriesDetails(
        seriesId: string,
        authorization: string,
        query: any
    ): Promise<any> {
        return await authorizedGet(`${SERIES_URL}/${seriesId}`, authorization,
            { ...query });
    }

    public async searchSeries(req: Request<SearchContentDto>) {
        return await authorizedGet(`${SERIES_URL}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getSeries(req: Request<GetSeriesDto>) {
        const seriesDetails = await this.getSeriesDetails(req.params.seriesId, req.headers.authorization, req.query);
        let similar: any = []
        try {
            const recommendations = await authorizedGet(`${SERIES_REC_URL}/${req.params.seriesId}`, req.headers.authorization,
                { ...req.query }, { 'Secret': config.rapiSecret });
            const query = recommendations.map((movie: any) => movie.id).join(',');
            similar = await authorizedGet(`${SERIES_URL}/resume`, req.headers.authorization,
                { ids: query });
        } catch (error) {
            console.error("Error fetching recommendations: ", error.message)
        }
        if (similar.length > 0) {
            seriesDetails.similar = similar;
        }
        return seriesDetails;
    }

    public async getCredits(req: Request<GetSeriesDto>) {
        return await authorizedGet(`${SERIES_URL}/${req.params.seriesId}/credits`, req.headers.authorization, {
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
