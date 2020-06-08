import { User } from '../user/User';
import { Solution } from '../solution/solution';

export interface Task {
  _id: string;
  _user: string;
  user?: User;
  _solutions: string[];
  solutions?: Solution[];
  title: string;
  repo: string;
  images: string[];
  createdAt?: string;
  tags: string[];
  content: string;
  tips: string[];
  rating: number;
  difficulty: number;
  reviewCount: number;
}
