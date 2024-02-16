import { Request } from '@models'
import { AUTH_URL, SEEN_CONTENT_URL, WATCHLIST_URL } from '@config'
import {
  CreateUserDto,
  Credentials,
  LoginDto,
  RefreshCredentialsDto,
  sendVerificationCodeDto,
} from '@dtos'
import { authorizedPost, post } from 'utils'

class AuthController {

  public async register(req: Request<CreateUserDto>): Promise<Credentials> {
    const response = await post(`${AUTH_URL}/register`, {
      ...req.body,
    })
    const token = response.token;
    await authorizedPost(WATCHLIST_URL, `Bearer ${token}`)
    await authorizedPost(SEEN_CONTENT_URL, `Bearer ${token}`)
    return response
  }

  public async login(req: Request<LoginDto>): Promise<Credentials> {
    return await post(`${AUTH_URL}/login`, {
      ...req.body,
    })
  }

  public async refreshCredentials(
    req: Request<RefreshCredentialsDto>
  ): Promise<Credentials> {
    return await post(`${AUTH_URL}/refreshCredentials`, {
      ...req.body,
    })
  }

  public async sendVerificationCode(
    req: Request<sendVerificationCodeDto>
  ): Promise<void> {
    return await post(`${AUTH_URL}/sendVerificationCode`, {
      ...req.body,
    })
  }
}

const authController = new AuthController()

export { authController }
