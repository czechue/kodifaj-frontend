import { User } from '../user/user';

export interface Solution {
  comment: string;
  createdAt: string;
  demo: string;
  phase: 'review' | 'done';
  repo: string;
  _id: string;
  _task: {
    images: string[];
    title: string;
  };
  _user: User;
}