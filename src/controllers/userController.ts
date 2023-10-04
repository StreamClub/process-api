// import { RequestDtos, ResponseDtos } from '@dtos';
import { Request } from '@models';

class UserController {

  public async register(
    req: Request<any>,
  ): Promise<any> {
    return {
      message: 'User created successfully',
    };
  }
}

const userController = new UserController();

export { userController };
