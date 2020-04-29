import { User } from '../user/user.types';

export interface Task {
  _id: string;
  _user: User;
  _solutions: string[];
  title: string;
  repo: string;
  images: string[];
  // rating: number;
  // reviewCount: number;
  createdAt: string;
  tags: string[];
  // difficulty: number;
  content: string;
  tips: string[];
}
