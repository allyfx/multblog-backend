import { Document, Schema } from 'mongoose';

export default interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  posts?: Schema.Types.ObjectId[],
}