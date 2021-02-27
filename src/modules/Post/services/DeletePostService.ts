import Post from '../entities/Post';

import AppError from 'shared/errors/AppError';

interface IRequest {
	id: string;
}

class DeletePostService {
	public async execute({ id }: IRequest) {
		const existsPost = await Post.findById(id);

		if (!existsPost) {
			throw new AppError('Post does not exists', 404);
		}
		
		await Post.deleteOne({ _id: id });
	}
}

export default DeletePostService;
