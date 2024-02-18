import { Request } from '@models';
import { WATCHLIST_URL } from '@config';
import { authorizedDel, authorizedGet, authorizedPut } from 'utils';

class WatchlistController {

    public async get(req: Request<any>) {
        return await authorizedGet(`${WATCHLIST_URL}/${req.params.userId}`, req.headers.authorization, {
            page: req.query.page,
            pageSize: req.query.pageSize,
        });
    };

    public async addContent(req: Request<any>) {
        return await authorizedPut(`${WATCHLIST_URL}`, req.headers.authorization, {
            ...req.body
        });
    };

    public async removeContent(req: Request<any>) {
        return await authorizedDel(`${WATCHLIST_URL}`, req.headers.authorization, {
            ...req.body
        });
    }

}

const watchlistController = new WatchlistController();

export { watchlistController };
