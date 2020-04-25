import { User } from './user.types';
import { Solution } from './solution.types';

export interface Task {
  _id: string;
  _user: User;
  solutions: Solution[];
  title: string;
  repo: string;
  images: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
  tags: string[];
  difficulty: number;
  content: string;
  tips: string[];
}
