import mongoose, { Schema } from "mongoose";

const taskSchema: Schema = new Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
  images: [String],
  tips: [String],
  tags: [String],
  title: String,
  _user: { type: Schema.Types.ObjectId, ref: 'users' }
});

mongoose.model("tasks", taskSchema);
