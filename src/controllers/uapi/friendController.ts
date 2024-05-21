import { Request } from '@models';
import { GetProfileDto } from '@dtos';
import { authorizedDel, authorizedGet, authorizedPost } from 'utils';
import { FRIEND_URL } from '@config';

export class FriendController {

    public async getFriendList(req: Request): Promise<any> {
        return await authorizedGet(`${FRIEND_URL}`, req.headers.authorization, { ...req.query });
    }

    public async sendFriendRequest(req: Request<GetProfileDto>): Promise<any> {
        return await authorizedPost(`${FRIEND_URL}/requests/${req.params.userId}`,
            req.headers.authorization, { ...req.body });
    }

    public async getFriendRequest(req: Request): Promise<any> {
        return await authorizedGet(`${FRIEND_URL}/requests`, req.headers.authorization, { ...req.query });
    }

    public async deleteFriendRequest(req: Request): Promise<void> {
        return await authorizedDel(`${FRIEND_URL}/requests/${req.params.requestId}`,
            req.headers.authorization, { ...req.body });
    }

    public async deleteFriend(req: Request): Promise<void> {
        return await authorizedDel(`${FRIEND_URL}/${req.params.userId}`, req.headers.authorization);
    }
}
