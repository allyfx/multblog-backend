import { Schema } from 'mongoose';

import User from 'modules/User/entities/User';
import Post from 'modules/Post/entities/Post';
import IPost from 'shared/interfaces/IPost';

import AppError from 'shared/errors/AppError';
import CreateUserService from 'modules/User/services/CreateUserService';

interface IRequest {
  title: string;
  description: String;
  content: String;
  author: Schema.Types.ObjectId;
}

class CreatePostService {
  public async execute({ title, description, content, author }: IRequest): Promise<IPost> {
    const userById = await User.findById(author);

    if (!userById) {
      throw new AppError('User does not exists', 404);
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
