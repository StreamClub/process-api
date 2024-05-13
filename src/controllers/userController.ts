import { Request } from '@models'
import { USER_URL } from '@config'
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

  public async update(req: Request<GetProfileDto>): Promise<any> {
    return await authorizedPatch(`${USER_URL}`, req.headers.authorization,
      {
        ...req.body
      })
  }
}

const userController = new UserController()

export { userController }
