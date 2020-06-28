import { ObjectId } from 'mongodb';

export interface CreateSolutionRequest {
  repo: string;
  demo: string;
  comment: string;
  phase: string;
  _task: ObjectId;
  _user?: ObjectId;
  createdAt: Date;
}
