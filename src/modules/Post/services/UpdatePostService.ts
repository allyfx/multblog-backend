import mongoose, { Schema } from "mongoose";

import User from 'modules/User/entities/User';
import Post from '../entities/Post';
import AppError from 'shared/errors/AppError';

interface IRequest {
	id: any;
  title: string;
  description: String;
  content: String;
  author: Schema.Types.ObjectId;
}

class UpdatePostService {
	public async execute({ id, title, description, content, author }: IRequest) {
		const userById = await User.findById(author);

		const postExists = await Post.findById(id);
		
    if (!userById) {
			throw new AppError('User does not exists', 404);
    }
		
		if (!postExists) {
			throw new AppError('Post does not exists', 404);
		}

		await Post.updateOne({ _id: id }, {
			title,
			description,
			content,
		});

		const post = await Post.findById(id);

		return post;
	}
}

export default UpdatePostService;
