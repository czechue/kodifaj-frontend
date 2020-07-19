import { User } from '../user/User';

export interface Solution {
  comment: string;
  createdAt: string;
  demo: string;
  phase: 'review' | 'done';
  repo: string;
  _id: string;
  task: {
    _id: string;
    images: string[];
    title: string;
  };
  user: User;
  technologies: string[];
}
