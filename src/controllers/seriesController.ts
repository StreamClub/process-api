import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';
import { SearchContentDto } from '@dtos';

class SeriesController {

    private SERIES_URL = `${config.capiUrl}/series`;

    public async searchSeries(req: Request<SearchContentDto>) {
        const response = await axios.get(`${this.SERIES_URL}`, {
            params: {
                query: req.query.query,
            },
            headers: { Authorization: `${req.headers.authorization}` }
        });
        return response.data;
    }

    public async getSeries(req: Request<SearchContentDto>) {
        const response = await axios.get(`${this.SERIES_URL}/${req.params.seriesId}`, {
            params: {
                country: req.query.country,
            },
            headers: { Authorization: `${req.headers.authorization}` }
        });
        return response.data;
    }

}

const seriesController = new SeriesController();

export { seriesController };
