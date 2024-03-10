import { Request } from '@models';
import { MOVIES_URL } from '@config';
import { GetMovieDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';
class MoviesController {

  public async getMovie(
    req: Request<GetMovieDto>,
  ): Promise<any> {
    return await authorizedGet(`${MOVIES_URL}/${req.params.movieId}`, req.headers.authorization,
      { ...req.query });
  }

  public async searchMovie(req: Request<SearchContentDto>) {
    return await authorizedGet(`${MOVIES_URL}`, req.headers.authorization,
      { ...req.query });
  }

  public async getCredits(req: Request<GetMovieDto>) {
    return await authorizedGet(`${MOVIES_URL}/${req.params.movieId}/credits`,
      req.headers.authorization, { ...req.query });
  }

}

const movieController = new MoviesController();

export { movieController };
