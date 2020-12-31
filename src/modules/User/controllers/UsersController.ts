import { Request, Response } from 'express';
import CreateUserService from 'modules/User/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    });

    return response.status(200).json(user);
  }
}

export default UsersController;