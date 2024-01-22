import axios from 'axios'
import { Request } from '@models'
import { config } from '@config'
import {
  CreateUserDto,
  Credentials,
  LoginDto,
  RefreshCredentialsDto,
  sendVerificationCodeDto,
} from '@dtos'

class AuthController {
  private AUTH_URL = `${config.uapiUrl}/auth`

  public async register(req: Request<CreateUserDto>): Promise<Credentials> {
    const response = await axios.post(`${this.AUTH_URL}/register`, {
      ...req.body,
    })
    const token = response.data.token;
    await axios.post(`${config.capiUrl}/watchlist`, {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  }

  public async login(req: Request<LoginDto>): Promise<Credentials> {
    const response = await axios.post(`${this.AUTH_URL}/login`, {
      ...req.body,
    })
    return response.data
  }

  public async refreshCredentials(
    req: Request<RefreshCredentialsDto>
  ): Promise<Credentials> {
    const response = await axios.post(
      `${this.AUTH_URL}/refreshCredentials`,
      {
        ...req.body,
      }
    )
    return response.data
  }

  public async sendVerificationCode(
    req: Request<sendVerificationCodeDto>
  ): Promise<void> {
    const response = await axios.post(
      `${this.AUTH_URL}/sendVerificationCode`,
      {
        ...req.body,
      }
    )
    return response.data
  }
}

const authController = new AuthController()

export { authController }
