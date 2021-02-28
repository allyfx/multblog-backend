import User from '../entities/User';
import Post from 'modules/Post/entities/Post';
import AppError from 'shared/errors/AppError';

class ListUserPosts {
	public async execute(user_id: any, id: any) {
		const userExists = await User.findById(id);
		if (!userExists) {
			throw new AppError('User does not exists', 404);
		}
		if (id === user_id) {
			throw new AppError('User does not own these posts', 403);
		}
		const posts = await Post.find({ author: id });
		return posts;
	}
}

export default ListUserPosts;
