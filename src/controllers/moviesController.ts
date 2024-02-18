import { Request } from '@models';
import { MOVIES_URL } from '@config';
import { GetMovieDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';
class MoviesController {

  public async getMovie(
    req: Request<GetMovieDto>,
  ): Promise<any> {
    return await authorizedGet(`${MOVIES_URL}/${req.params.movieId}`, req.headers.authorization,
      {
        country: req.query.country
      });
  }

  public async searchMovie(req: Request<SearchContentDto>) {
    return await authorizedGet(`${MOVIES_URL}`, req.headers.authorization,
      {
        query: req.query.query,
        page: req.query.page,
      });
  }

}

const movieController = new MoviesController();

export { movieController };
