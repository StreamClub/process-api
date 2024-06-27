import { Request } from '@models'
import { MOVIES_URL, SERIES_URL, USER_REC_URL, USER_URL, config } from '@config'
import { authorizedGet, authorizedPatch } from 'utils'
import { GetProfileDto } from '@dtos'

class UserController {

  public async search(req: Request<any>): Promise<any> {
    return await authorizedGet(`${USER_URL}`, req.headers.authorization, { ...req.query })
  }

  public async get(req: Request<GetProfileDto>): Promise<any> {
    const response = await authorizedGet(`${USER_URL}/${req.params.userId}`, req.headers.authorization)
    return {
      ...response,
      reviewsCount: 0, //TODO: get reviews count from capi
    }
  }

  public async getPhotos(req: Request<any>): Promise<any> {
    return await authorizedGet(`${USER_URL}/photos`, req.headers.authorization)
  }

  public async update(req: Request<GetProfileDto>): Promise<any> {
    return await authorizedPatch(`${USER_URL}`, req.headers.authorization,
      {
        ...req.body
      })
  }

  public async getMovieRecommendations(req: Request<any>, res: any): Promise<any> {
    const userId = res.locals.userId;
    const recommendations = await authorizedGet(`${USER_REC_URL}/movie/${userId}`, req.headers.authorization,
      { ...req.query }, { 'Secret': config.rapiSecret });
    const query = recommendations.map((movie: any) => movie.id).join(',');
    return await authorizedGet(`${MOVIES_URL}/resume`, req.headers.authorization,
      { ids: query });
  }

  public async getSeriesRecommendations(req: Request<any>, res: any): Promise<any> {
    const userId = res.locals.userId;
    const recommendations = await authorizedGet(`${USER_REC_URL}/series/${userId}`, req.headers.authorization,
      { ...req.query }, { 'Secret': config.rapiSecret });
    const query = recommendations.map((movie: any) => movie.id).join(',');
    return await authorizedGet(`${SERIES_URL}/resume`, req.headers.authorization,
      { ids: query });
  }
}

const userController = new UserController()

export { userController }
