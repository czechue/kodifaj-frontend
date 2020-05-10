import { User } from '../user/user.types';

export interface Task {
  _id: string;
  _user: User;
  _solutions: string[];
  title: string;
  repo: string;
  images: string[];
  createdAt: string;
  tags: string[];
  content: string;
  tips: string[];
  // rating: number;
  // difficulty: number;
  // reviewCount: number;
}
