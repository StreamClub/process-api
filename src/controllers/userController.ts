// import { RequestDtos, ResponseDtos } from '@dtos';
import axios from 'axios';
import { Request } from '@models';
import { config } from '@config';
import { CreateUserDto, LoginDto } from '@dtos';

class UserController {

  private USERS_URL = config.uapiUrl + "/users";

  public async register(
    req: Request<CreateUserDto>,
  ): Promise<any> {
    const response = await axios.post(this.USERS_URL + "/register", {
      ...req.body,
    });
    return response.data;
  }

  public async login(
    req: Request<LoginDto>,
  ): Promise<any> {
    const response = await axios.post(this.USERS_URL + "/login", {
      ...req.body,
    });
    return response.data;
  }
}

const userController = new UserController();

export { userController };
