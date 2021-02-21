import { Request, Response } from 'express';
import AuthenticateUserService from 'modules/User/services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const userAuth = await authenticateUser.execute({
      email,
      password
    });

    return response.status(200).json(userAuth);
  }
}

export default SessionsController;