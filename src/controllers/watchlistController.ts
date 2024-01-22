import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';

class WatchlistController {

    private WATCHLIST_URL = `${config.capiUrl}/watchlist`;

    public async create(req: Request<any>) {
        const response = await axios.post(`${this.WATCHLIST_URL}`, {},
        {
            headers: {
                Authorization: `${req.headers.authorization}`
            }
        } );
        return response.data;
    };

    public async get(req: Request<any>) {
        const response = await axios.get(`${this.WATCHLIST_URL}/${req.params.userId}`, {
            params: req.query,
            headers: {Authorization: `${req.headers.authorization}`}
        });
        return response.data;
    };

    public async addContent(req: Request<any>) {
        console.log(req.body);
        const response = await axios.put(`${this.WATCHLIST_URL}`, {...req.body}, {
            headers: {Authorization: `${req.headers.authorization}`}
        });
        return response.data;
    };

    public async removeContent(req: Request<any>) {
        const response = await axios.delete(`${this.WATCHLIST_URL}`, {
            data: {...req.body},
            headers: {Authorization: `${req.headers.authorization}`}
        });
        return response.data;
    }

}

const watchlistController = new WatchlistController();

export { watchlistController };
