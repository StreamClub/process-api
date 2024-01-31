import { Request } from '@models'
import { config } from '@config'
import {
  CreateUserDto,
  Credentials,
  LoginDto,
  RefreshCredentialsDto,
  sendVerificationCodeDto,
} from '@dtos'
import { authorizedPost, post } from 'utils'

class AuthController {
  private AUTH_URL = `${config.uapiUrl}/auth`

  public async register(req: Request<CreateUserDto>): Promise<Credentials> {
    const response = await post(`${this.AUTH_URL}/register`, {
      ...req.body,
    })
    const token = response.token;
    return await authorizedPost(`${config.capiUrl}/watchlist`, `Bearer ${token}`)
  }

  public async login(req: Request<LoginDto>): Promise<Credentials> {
    return await post(`${this.AUTH_URL}/login`, {
      ...req.body,
    })
  }

  public async refreshCredentials(
    req: Request<RefreshCredentialsDto>
  ): Promise<Credentials> {
    return await post(`${this.AUTH_URL}/refreshCredentials`, {
      ...req.body,
    })
  }

  public async sendVerificationCode(
    req: Request<sendVerificationCodeDto>
  ): Promise<void> {
    return await post(`${this.AUTH_URL}/sendVerificationCode`, {
      ...req.body,
    })
  }
}

const authController = new AuthController()

export { authController }
