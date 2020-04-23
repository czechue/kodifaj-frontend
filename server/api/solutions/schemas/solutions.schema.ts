import * as mongoose from 'mongoose';

export const SolutionSchema = new mongoose.Schema({
  repo: String,
  demo: String,
  comment: String,
  phase: String,
  createdAt: { type: Date, default: Date.now },
  _task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
