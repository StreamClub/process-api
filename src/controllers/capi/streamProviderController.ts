import { STREAM_PROVIDERS_URL } from '@config';
import { Request, Response } from '@models';
import { authorizedDel, authorizedGet, authorizedPut } from 'utils';

export class StreamProviderController {

    public async getStreamProviders(req: Request<any>) {
        return await authorizedGet(`${STREAM_PROVIDERS_URL}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getUserStreamProviders(req: Request<any>) {
        return await authorizedGet(`${STREAM_PROVIDERS_URL}/${req.params.userId}`,
            req.headers.authorization, { ...req.query, });
    }

    public async addProvider(req: Request<any>) {
        return await authorizedPut(`${STREAM_PROVIDERS_URL}`, req.headers.authorization, {
            ...req.body
        });
    }

    public async deleteProvider(req: Request<any>) {
        return await authorizedDel(`${STREAM_PROVIDERS_URL}`, req.headers.authorization, {
            ...req.body
        });
    }

}

const streamProviderController = new StreamProviderController();

export { streamProviderController };