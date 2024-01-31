import { Request } from '@models';
import { config } from '@config';
import { authorizedDel, authorizedGet, authorizedPut } from 'utils';

class WatchlistController {

    private WATCHLIST_URL = `${config.capiUrl}/watchlist`;

    public async get(req: Request<any>) {
        return await authorizedGet(`${this.WATCHLIST_URL}/${req.params.userId}`, req.headers.authorization, {
            page: req.query.page,
            pageSize: req.query.pageSize,
        });
    };

    public async addContent(req: Request<any>) {
        return await authorizedPut(`${this.WATCHLIST_URL}`, req.headers.authorization, {
            ...req.body
        });
    };

    public async removeContent(req: Request<any>) {
        return await authorizedDel(`${this.WATCHLIST_URL}`, req.headers.authorization, {
            ...req.body
        });
    }

}

const watchlistController = new WatchlistController();

export { watchlistController };
