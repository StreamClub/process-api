import { Request } from '@models'
import { USER_URL } from '@config'
import { authorizedGet } from 'utils'
import { GetProfileDto } from '@dtos'

class UserController {

  public async get(req: Request<GetProfileDto>): Promise<any> {
    const response = await authorizedGet(`${USER_URL}/${req.params.userId}`, req.headers.authorization)
    return {
      ...response,
      reviewsCount: 0, //TODO: get reviews count from capi
    }
  }
}

const userController = new UserController()

export { userController }
