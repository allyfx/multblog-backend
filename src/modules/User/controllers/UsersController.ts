import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserPostsService from '../services/ListUserPostsService'

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    });

    return response.status(201).json(user);
  }

	public async listAllPosts(request: Request, response: Response): Promise<Response> {
		const id = request.params.id;
		const listUserPosts = new ListUserPostsService();
		const posts = await listUserPosts.execute(id);
		return response.status(200).json(posts);
	}
}

export default UsersController;