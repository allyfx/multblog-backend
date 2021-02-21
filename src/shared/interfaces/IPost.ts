import { Document, Schema } from 'mongoose';

export default interface IPost extends Document {
  title: String,
  description: String,
  content: String,
  author: Schema.Types.ObjectId,
  created_at?: Date,
}