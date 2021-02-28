import Post from '../entities/Post';

class ListAllPostsService {
	public async execute() {
		const posts = await Post.find();
		return posts;
	}
}

export default ListAllPostsService;
