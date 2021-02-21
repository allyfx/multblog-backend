import { Request, Response } from 'express';
import CreatePostService from '../services/CreatePostService';

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

    return response.status(200).json(post);
  }
}

export default PostController;
