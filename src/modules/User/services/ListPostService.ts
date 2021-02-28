import Post from 'modules/Post/entities/Post';
import AppError from 'shared/errors/AppError';

class ListPostService {
	public async execute(post_id: any, user_id: any) {
		const postExists = await Post.findById(post_id);
		if (!postExists) {
			throw new AppError('Post does not exists', 404);
		}
		if (postExists.author.toString() !== user_id) {
			throw new AppError('User does not own this post', 401);
		}
		return postExists;
	}
}

export default ListPostService;
