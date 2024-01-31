import { Request } from '@models';
import { config } from '@config';
import { SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';

class ArtistController {

    private ARTISTS_URL = `${config.capiUrl}/artists`;

    public async searchArtist(req: Request<SearchContentDto>) {
        return await authorizedGet(`${this.ARTISTS_URL}`, req.headers.authorization, {
            query: req.query.query,
            page: req.query.page,
        });
    }

}

const artistController = new ArtistController();

export { artistController };
