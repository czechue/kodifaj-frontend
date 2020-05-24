import mongoose, { Schema } from "mongoose";

const solutionSchema: Schema = new Schema({
  repo: String,
  demo: String,
  comment: String,
  phase: String,
  createdAt: { type: Date, default: Date.now },
  _task: { type: Schema.Types.ObjectId, ref: "tasks" },
  _user: { type: Schema.Types.ObjectId, ref: "users" }
});

mongoose.model("solutions", solutionSchema);
