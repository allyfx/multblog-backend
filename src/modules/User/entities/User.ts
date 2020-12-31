import mongo from 'config/mongo';
import mongoose, { Schema } from 'mongoose';
import IUser from 'shared/interfaces/IUser';

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  password: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
