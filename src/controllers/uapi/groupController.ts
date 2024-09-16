import { Request } from '@models';
import { authorizedDel, authorizedGet, authorizedPost } from 'utils';
import { config, GROUP_URL, GROUPS_REC_URL, MOVIES_URL } from '@config';

export class GroupController {

    public async getUserGroups(req: Request): Promise<any> {
        const response = await authorizedGet(`${GROUP_URL}`, req.headers.authorization, { ...req.query });
        for (const group of response.groups) {
            const recommendations = await authorizedGet(`${GROUPS_REC_URL}/${group.id}/movie`, req.headers.authorization,
                { ...req.query }, { 'Secret': config.rapiSecret });
            const query = recommendations.map((movie: any) => movie.id).join(',');
            const movies = await authorizedGet(`${MOVIES_URL}/resume`, req.headers.authorization,
                { ids: query });
            group.movies = movies;
        }
        return response;
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
