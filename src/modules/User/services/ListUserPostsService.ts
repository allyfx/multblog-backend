import User from '../entities/User';
import Post from 'modules/Post/entities/Post';
import AppError from 'shared/errors/AppError';

class ListUserPosts {
	public async execute(id: any) {
		const userExists = await User.findById(id);
		if (!userExists) {
			throw new AppError('User does not exists', 404);
		}
		const posts = await Post.find({ author: id });
		return posts;
	}
}

export default ListUserPosts;
