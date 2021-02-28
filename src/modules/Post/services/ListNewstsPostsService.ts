import Post from '../entities/Post';

class ListNewestsPostsService {
	public async execute() {
		const newestPosts = await Post.find({}, {}, { sort: { 'created_at' : -1 } });
		let posts = [];
		for (let index = 0; index < 4; index++) {
			if (newestPosts[index]) posts.push(newestPosts[index]);
		}
		return posts;
	}
}

export default ListNewestsPostsService;
