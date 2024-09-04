import { Request } from '@models';
import { GetProfileDto } from '@dtos';
import { authorizedDel, authorizedGet, authorizedPost } from 'utils';
import { GROUP_URL } from '@config';

export class GroupController {

    public async getUserGroups(req: Request): Promise<any> {
        return await authorizedGet(`${GROUP_URL}`, req.headers.authorization, { ...req.query });
    }

    public async createGroup(req: Request): Promise<any> {
        return await authorizedPost(`${GROUP_URL}`, req.headers.authorization, { ...req.body });
    }

    public async getGroup(req: Request): Promise<any> {
        return await authorizedGet(`${GROUP_URL}/${req.params.id}`, req.headers.authorization, { ...req.query });
    }

    public async deleteGroup(req: Request): Promise<void> {
        return await authorizedDel(`${GROUP_URL}/${req.params.id}`, req.headers.authorization);
    }

}
