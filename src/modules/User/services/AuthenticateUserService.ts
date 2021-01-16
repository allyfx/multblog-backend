import { sign } from 'jsonwebtoken';
import authConfig from 'config/auth';

import User from 'modules/User/entities/User';
import HashProvider from '../providers/HashProvider';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import AppError from 'shared/errors/AppError';

import user_view from '../views/user_view';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  private hashProvider: IHashProvider;

  constructor () {
    this.hashProvider = new HashProvider(); 
  }

  public async execute({ email, password }: IRequest) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError('Incorrect email/password combination.');
    }

    const passwordMatch = await this.hashProvider.compareHash(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorrect email/password combination.');
    }

    const { expiredIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiredIn,
    });

    return {
      user: user_view.render(user),
      token,
    }
  }
}

export default AuthenticateUserService;