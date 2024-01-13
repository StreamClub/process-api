import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';
import { GetMovieDto } from '@dtos';

class MoviesController {

  private MOVIES_URL = `${config.capiUrl}/movies`;

  public async getMovie(
    req: Request<GetMovieDto>,
  ): Promise<any> {
    const response = await axios.get(`${this.MOVIES_URL}/${req.params.movieId}`, {
        params: {
            country: req.query.country
        }
    });
    return response.data;
  }

  public async searchMovie(req: Request<GetMovieDto>) {
    const response = await axios.get(`${this.MOVIES_URL}`, {
        params: {
            query: req.query.query,
        }
    });
    return response.data;
  }

}

const movieController = new MoviesController();

export { movieController };
