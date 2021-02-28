import { Schema } from 'mongoose';

import User from 'modules/User/entities/User';
import Post from 'modules/Post/entities/Post';
import IPost from 'shared/interfaces/IPost';

import AppError from 'shared/errors/AppError';

interface IRequest {
	user_id: string;
  title: string;
  description: String;
  content: String;
  author: Schema.Types.ObjectId;
}

class CreatePostService {
  public async execute({ user_id, title, description, content, author }: IRequest): Promise<IPost> {
    const userById = await User.findById(author);

    if (!userById) {
      throw new AppError('User does not exists', 404);
    }

		if (author.toString() !== user_id) {
			throw new AppError('User does not own this post', 403);
		}

    const newPost = await Post.create({
      title,
      description,
      content,
      author
    });

    userById.posts?.push(newPost._id);
    await userById.save();

    return newPost;
  }
}

export default CreatePostService;
