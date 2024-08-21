import { Request } from '@models';
import { FRIEND_URL, MOVIES_REC_URL, MOVIES_URL, config } from '@config';
import { GetMovieDto, SearchContentDto } from '@dtos';
import { authorizedGet } from 'utils';
class MoviesController {

  private async getMovieDetails(
    movieId: string,
    authorization: string,
    query: any
  ): Promise<any> {
    return await authorizedGet(`${MOVIES_URL}/${movieId}`, authorization,
      { ...query });
  }

  public async getMovie(
    req: Request<GetMovieDto>,
  ): Promise<any> {
    const movieDetails = await this.getMovieDetails(req.params.movieId, req.headers.authorization, req.query);
    let similar: any = []
    try {
      const recommendations = await authorizedGet(`${MOVIES_REC_URL}/${req.params.movieId}`, req.headers.authorization,
        { ...req.query }, { 'Secret': config.rapiSecret });
      const query = recommendations.map((movie: any) => movie.id).join(',');
      similar = await authorizedGet(`${MOVIES_URL}/resume`, req.headers.authorization,
        { ids: query });
    } catch (error) {
      console.error("Error fetching recommendations: ", error.message)
    }
    if (similar.length > 0) {
      movieDetails.similar = similar;
    }
    return movieDetails;
  }

  public async searchMovie(req: Request<SearchContentDto>) {
    return await authorizedGet(`${MOVIES_URL}`, req.headers.authorization,
      { ...req.query });
  }

  public async discoverMovies(req: Request<SearchContentDto>) {
    return await authorizedGet(`${MOVIES_URL}/discover`, req.headers.authorization,
      { ...req.query });
  }

  public async getRecommendations(req: Request<GetMovieDto>) {
    const response = await authorizedGet(`${FRIEND_URL}/all`, req.headers.authorization, {
      ...req.query,
    });
    const friendsIds = (response.friends).join(',');
    return await authorizedGet(`${MOVIES_URL}/recommendations`,
      req.headers.authorization, { friendsIds });
  }

  public async getCredits(req: Request<GetMovieDto>) {
    return await authorizedGet(`${MOVIES_URL}/${req.params.movieId}/credits`,
      req.headers.authorization, { ...req.query });
  }

}

const movieController = new MoviesController();

export { movieController };
