import { Request } from '@models';
import { MOVIES_REC_URL, MOVIES_URL, config } from '@config';
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
    const similar: any = []
    try {
      const recommendations = await authorizedGet(`${MOVIES_REC_URL}/${req.params.movieId}`, req.headers.authorization,
        { ...req.query }, {'Secret': config.rapiSecret});
      for (const movie of recommendations.slice(0,3)) { //TODO: sacar el slice, esto esta ahora por los problemas de performance
        const recommendation = await this.getMovieDetails(movie.id, req.headers.authorization, req.query);
        similar.push({
          "id": recommendation.id,
          "title": recommendation.title,
          "posterPath": recommendation.poster,
          "releaseDate": recommendation.releaseDate
        });
      };
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

  public async getCredits(req: Request<GetMovieDto>) {
    return await authorizedGet(`${MOVIES_URL}/${req.params.movieId}/credits`,
      req.headers.authorization, { ...req.query });
  }

}

const movieController = new MoviesController();

export { movieController };
