import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';
import { GetMovieDto, SearchContentDto } from '@dtos';

class MoviesController {

  private MOVIES_URL = `${config.capiUrl}/movies`;

  public async getMovie(
    req: Request<GetMovieDto>,
  ): Promise<any> {
    const response = await axios.get(`${this.MOVIES_URL}/${req.params.movieId}`, {
      params: {
        country: req.query.country
      },
      headers: { Authorization: `${req.headers.authorization}` }
    });
    return response.data;
  }

  public async searchMovie(req: Request<SearchContentDto>) {
    const response = await axios.get(`${this.MOVIES_URL}`, {
      params: {
        query: req.query.query,
      },
      headers: { Authorization: `${req.headers.authorization}` }
    });
    return response.data;
  }

}

const movieController = new MoviesController();

export { movieController };
