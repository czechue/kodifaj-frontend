import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  login: string;
  googleId?: string;
  githubId?: string;
  photo?: string;
}

const userSchema: Schema = new Schema({
  googleId: String,
  githubId: String,
  login: String,
  photo: String,
});

mongoose.model<IUser>("users", userSchema);
