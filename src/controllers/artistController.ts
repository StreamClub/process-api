import { Request } from '@models';
import { ARTISTS_URL } from '@config';
import { SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';

class ArtistController {

    public async searchArtist(req: Request<SearchContentDto>) {
        return await authorizedGet(`${ARTISTS_URL}`, req.headers.authorization, {
            ...req.query,
        });
    }

    public async getArtist(req: Request<any>) {
        return await authorizedGet(`${ARTISTS_URL}/${req.params.artistId}`, req.headers.authorization);
    }

}

const artistController = new ArtistController();

export { artistController };
