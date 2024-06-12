import { Request } from '@models';
import { PRIVACY_URL } from '@config';
import { authorizedGet, authorizedPatch } from 'utils';

class PrivacyController {

    public async getPrivacy(req: Request<any>) {
        return await authorizedGet(`${PRIVACY_URL}`, req.headers.authorization);
    }

    public async updateWatchlistPrivacy(req: Request<any>) {
        return await authorizedPatch(`${PRIVACY_URL}/watchlist`, req.headers.authorization, {
            ...req.body,
        });
    }

    public async updateSeenContentPrivacy(req: Request<any>) {
        return await authorizedPatch(`${PRIVACY_URL}/seenContent`, req.headers.authorization, {
            ...req.body,
        });
    }
}

export const privacyController = new PrivacyController();
