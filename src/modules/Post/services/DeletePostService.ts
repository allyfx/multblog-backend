import Post from '../entities/Post';

import AppError from 'shared/errors/AppError';

interface IRequest {
	user_id: string;
	id: string;
}

class DeletePostService {
	public async execute({ user_id, id }: IRequest) {
		const existsPost = await Post.findById(id);

		if (!existsPost) {
			throw new AppError('Post does not exists', 404);
		}

		if (existsPost.author.toString() !== user_id) {
			throw new AppError('User does not own this post', 403);
		}
		
		await Post.deleteOne({ _id: id });
	}
}

export default DeletePostService;
