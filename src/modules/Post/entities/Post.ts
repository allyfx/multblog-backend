import mongoose, { Schema } from 'mongoose';
import IPost from 'shared/interfaces/IPost';

const PostSchema: Schema = new Schema({
  title: String,
  description: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IPost>('Post', PostSchema);
