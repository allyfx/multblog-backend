import { Request, Response } from 'express';
import CreatePostService from '../services/CreatePostService';
import UpdatePostService from '../services/UpdatePostService';
import DeletePostService from '../services/DeletePostService';
import ListAllPostsService from '../services/ListAllPostsService';

import AppError from 'shared/errors/AppError';

class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, author, content, description } = request.body;

    if (!title || !description || !content || !author) {
      throw new AppError('Missing parameters', 400);
    }

    const createPost = new CreatePostService();

    const post = await createPost.execute({
      title,
      author,
      content,
      description
    });

    return response.status(201).json(post);
  }

	public async update(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const { title, author, content, description } = request.body;

    if (!title || !description || !content || !author) {
      throw new AppError('Missing parameters', 400);
    }

		const updatePost = new UpdatePostService();

		const post = await updatePost.execute({
			id,
      title,
      author,
      content,
      description
    });

		return response.status(200).json(post);
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const deletePost = new DeletePostService();
		await deletePost.execute({ id });
		return response.status(200).json();
	}

	public async list(request: Request, response: Response): Promise<Response> {
		const listAllPosts = new ListAllPostsService();
		const posts = await listAllPosts.execute();
		return response.status(200).json(posts);
	}
}

export default PostController;
