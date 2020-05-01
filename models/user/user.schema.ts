import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  login: string;
  githubId?: string;
  photo?: string;
}

const UserSchema: Schema = new Schema({
  login: String,
  githubId: String,
  photo: String,
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);
