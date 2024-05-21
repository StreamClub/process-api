import { Request } from '@models'
import { AUTH_URL, SEEN_CONTENT_URL, STREAM_PROVIDERS_URL, WATCHLIST_URL } from '@config'
import {
  Credentials,
} from '@dtos'
import { authorizedPost, post } from 'utils'

class AuthController {

  public async register(req: Request<any>): Promise<Credentials> {
    const response = await post(`${AUTH_URL}/register`, {
      ...req.body,
    })
    const token = response.token;
    await authorizedPost(WATCHLIST_URL, `Bearer ${token}`)
    await authorizedPost(SEEN_CONTENT_URL, `Bearer ${token}`)
    await authorizedPost(STREAM_PROVIDERS_URL, `Bearer ${token}`)
    return response
  }

  public async login(req: Request<any>): Promise<Credentials> {
    return await post(`${AUTH_URL}/login`, {
      ...req.body,
    })
  }

  public async refreshCredentials(
    req: Request<any>
  ): Promise<Credentials> {
    return await post(`${AUTH_URL}/refreshCredentials`, {
      ...req.body,
    })
  }

  public async sendVerificationCode(
    req: Request<any>
  ): Promise<void> {
    return await post(`${AUTH_URL}/sendVerificationCode`, {
      ...req.body,
    })
  }
}

const authController = new AuthController()

export { authController }
