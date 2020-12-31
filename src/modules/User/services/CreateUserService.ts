import User from 'modules/User/entities/User';
import HashProvider from '../providers/HashProvider';
import IUser from 'shared/interfaces/IUser';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string,
  email: string,
  password: string,
}

class CreateUserService {
  private hashProvider: IHashProvider;

  constructor () {
    this.hashProvider = new HashProvider(); 
  }

  public async execute({ name, email, password }: IRequest): Promise<IUser> {
    const hashedPasswod = await this.hashProvider.generateHash(password);

    const user = await User.create({ name, email, password: hashedPasswod });

    return user;
  }
}

export default CreateUserService;
